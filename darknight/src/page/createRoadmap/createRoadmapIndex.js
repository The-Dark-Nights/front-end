import React, { useRef, useState, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  useReactFlow,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
} from "reactflow";
import "reactflow/dist/style.css";

import style from "./createRoadmap.module.css";
import DownloadButton from "./component/downloadBtn";
import Sidebar from "./component/sidebar";
import { saveApi } from "../../apis/saveApi";
import { getRoadMapResotre, postRoadMapSave } from "../../apis/api";
import axios, { Axios } from "axios";

const flowKey = "example-flow";
const getNodeId = () => `randomnode_${+new Date()}`;

const initialNodes = [
  // {
  //   id: "1",
  //   data: { label: "Node 1" },
  //   position: { x: 100, y: 100 },
  //   draggable: "false",
  // },
  // { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 200 } },
];
const initialEdges = [
  // { id: "e1-2", source: "1", target: "2" }
];

let id = 0;
const getId = () => `dndnode_${id++}`;

function Flow() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { setViewport } = useReactFlow();
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  //노드 drop후 노드 생성
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      const name = event.dataTransfer.getData("application/reactflow");
      const url = event.dataTransfer.getData("application/reactflow/url");
      console.log(typeof name);
      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        name,
        url,
        position,
        data: {
          label: (
            <div>
              {name}
              <img
                src={url}
                style={{
                  width: "12px",
                  height: "12px",
                  marginLeft: "3px",
                  position: "relative",
                  top: "2px",
                }}
              />
            </div>
          ),
        },
        // data: {label: name} ,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  //전체 저장
  const onSave = useCallback(
    (newTitle) => {
      console.log(newTitle);
      if (reactFlowInstance) {
        const flow = reactFlowInstance.toObject();
        // console.log(JSON.stringify(flow));
        postRoadMapSave(JSON.stringify(flow), newTitle).then((res) => {
          console.log(res);
          alert("저장완료");
        });
        // localStorage.setItem(flowKey, JSON.stringify(flow));
        // saveApi(flow);
      }
    },
    [reactFlowInstance]
  );

  //직전 저장 가져오기
  const onRestore = useCallback(
    (newTitle) => {
      const restoreFlow = async () => {
        await getRoadMapResotre(newTitle).then((res) => {
          const flow = JSON.parse(res.data.flow);

          if (flow) {
            const { x = 0, y = 0, zoom = 1 } = flow.viewport;
            let nodesArr = flow.nodes || [];
            for (let i = 0; i < nodesArr.length; i++) {
              nodesArr[i].data = {
                label: (
                  <div>
                    {nodesArr[i].name}
                    <img
                      src={nodesArr[i].url}
                      style={{
                        width: "12px",
                        height: "12px",
                        marginLeft: "3px",
                        position: "relative",
                        top: "2px",
                      }}
                    />
                  </div>
                ),
              };
            }
            console.log("바뀐후", nodesArr || []);
            setNodes(nodesArr);
            setEdges(restoreFlow.edges || []);
            setViewport({ x, y, zoom });
          }
        });
      };

      restoreFlow();
    },
    [setNodes, setViewport]
  );

  // const test = useCallback(() => {
  //   axios.get("http://192.168.0.59:9999/test").then((res) => console.log(res));
  // });

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: { label: "Added node" },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  //노드 삭제
  const onNodesDelete = useCallback(
    (deleted) => {
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges);
          const outgoers = getOutgoers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter(
            (edge) => !connectedEdges.includes(edge)
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
            }))
          );

          return [...remainingEdges, ...createdEdges];
        }, edges)
      );
    },
    [nodes, edges]
  );

  const [newTitle, setNewTitle] = useState("");
  const titleChange = (e) => {
    setNewTitle(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div className={style.dndflow}>
        <div>
          <p>제목 : </p>
          <input type="text" onChange={titleChange} value={newTitle} />
          <p>이미지 파일</p>
          <input type="file" />
        </div>
        <ReactFlowProvider>
          <div
            className={style.reactflowWrapper}
            ref={reactFlowWrapper}
            id="react-flow__viewport"
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onNodesDelete={onNodesDelete}
              fitView
              className="download-image"
            >
              {/* react-flow__viewport */}
              <Panel position="top-right">
                <button
                  onClick={() => {
                    onSave(newTitle);
                  }}
                  className={style.roadmapBtn}
                >
                  save
                </button>
                <button
                  onClick={() => {
                    onRestore(newTitle);
                  }}
                  className={style.roadmapBtn}
                >
                  restore
                </button>
                <DownloadButton />
              </Panel>
              <Controls showZoom={false} />
              <MiniMap />
              {/* <Background variant="dots" gap={12} size={1} /> */}
              <Background id="1" gap={10} color="#f1f1f1" variant="lines" />
              <Background
                id="2"
                gap={100}
                offset={1}
                color="#ccc"
                variant="lines"
              />
            </ReactFlow>
          </div>
          <Sidebar />
        </ReactFlowProvider>
      </div>
    </>
  );
}

export default function CreateRoadmap() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
