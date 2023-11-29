import React, { useRef, useState, useCallback, useEffect } from "react";
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

import style from "../createRoadmap/createRoadmap.module.css";

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

let id = 0;


function ReadReactFlow({setSideOpen,sideOpen, roadMapDetail}) {
  
  const clickNode = useCallback(() => {
 
    setSideOpen(!sideOpen);
  },[sideOpen]);
  const initialNodes = [
    {
      id: "1",
      data: { label: <div>HTML</div> },
      position: { x: 100, y: 100 },
    
    },
    {
      id: "2",
      data: { label: <div>JAVASCRIPT</div> },
      position: { x: 100, y: 200 },
     
    },
  ];
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { setViewport } = useReactFlow();
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  useEffect(() =>{
    if(roadMapDetail){
  const flow = JSON.parse(roadMapDetail.roadmap);

          if (flow) {
            const { x = 0, y = 0, zoom = 1 } = flow.viewport;
            let nodesArr = flow.nodes || [];
            let edgesArr = flow.edges || [];
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
            setEdges(edgesArr);
            setViewport({ x, y, zoom });
          }
        }
  },[roadMapDetail])


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
              //   onDrop={onDrop}
              //   onDragOver={onDragOver}
              //   onNodesDelete={onNodesDelete}
              onNodeClick={clickNode}
              fitView
            >
              <Controls showInteractive={true} onInteractiveChange={(interactiveStatus) => interactiveStatus=true} />
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
        </ReactFlowProvider>
      </div>
    </>
  );
}

export default function ReadReactflowWrap({ setSideOpen, sideOpen , roadMapDetail}) {
  
  return (
    <ReactFlowProvider>
      <ReadReactFlow setSideOpen={setSideOpen} sideOpen={sideOpen} roadMapDetail = {roadMapDetail}/>
    </ReactFlowProvider>
  );
}
