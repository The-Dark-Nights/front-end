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

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      const name = event.dataTransfer.getData("application/reactflow");
      const url = event.dataTransfer.getData("application/reactflow/url");
     
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
        data: { label: (<div>{name}<img src={url} style={{width:"12px",height:"12px",marginLeft:"3px",position:"relative",top:"2px"}}/></div>) },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

   const onSave = useCallback(() => {
    
    if (reactFlowInstance) {
      const flow = reactFlowInstance.toObject();
      console.log(JSON.stringify(flow))
      localStorage.setItem(flowKey, JSON.stringify(flow));
        saveApi(flow);
    }
  }, [reactFlowInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

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

  return (
    <>
      <div className={style.dndflow}>
        <ReactFlowProvider>
          <div className={style.reactflowWrapper} ref={reactFlowWrapper}>
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
            >
              <Panel position="top-right">
                <button onClick={onSave} className={style.roadmapBtn}>
                  save
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
