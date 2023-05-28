import "./style.css";

import { sampleDataTree } from "./mockedData";
import { TreeNodeType } from "./types";

const convertToLinearData = (data: TreeNodeType[]): TreeNodeType[] => {
  const result: TreeNodeType[] = [];
  const process = (data: TreeNodeType[]) => {
    // depth first collect
    for (const item of data) {
      result.push(item);

      if (item.open && item.children?.length) {
        process(item.children);
      }
    }
  };

  process(data);

  return result;
};

const root = document.getElementById("root");

function buildDomTree(data: TreeNodeType[]) {
  const result = document.createDocumentFragment();
  const process = ({ node, depth }: { node: TreeNodeType; depth: number }) => {
    const wrapper = document.createElement("div");
    const isRoot = depth === 0;

    wrapper.classList.add("node");

    if (isRoot) {
      wrapper.classList.add("root");
    }

    const label = document.createElement("div");
    label.classList.add("label");

    if (node.isActive) {
      label.classList.add("active");
    }

    const labelFragment = document.createDocumentFragment();
    const labelFragmentChildOne = document.createElement("div");
    labelFragmentChildOne.innerText = node.label;
    const labelFragmentChildTwo = document.createElement("div");
    labelFragmentChildTwo.innerText = `Detail: ${node.label} - Depth: ${depth}`;

    labelFragment.appendChild(labelFragmentChildOne);
    labelFragment.appendChild(labelFragmentChildTwo);
    label.appendChild(labelFragment);

    const childrenWrapper = document.createElement("div");
    childrenWrapper.classList.add("children", node.open ? "show" : "hide");

    for (const child of node.children ?? []) {
      childrenWrapper.appendChild(process({ node: child, depth: depth + 1 }));
    }

    wrapper.appendChild(label);
    wrapper.appendChild(childrenWrapper);

    return wrapper;
  };

  for (const node of data) {
    result.appendChild(process({ node, depth: 0 }));
  }

  return result;
}

function render() {
  const constructedTree = buildDomTree(sampleDataTree);
  root?.replaceChildren(constructedTree);
}

const findNode = (
  nodes: TreeNodeType[],
  by: (node: TreeNodeType) => boolean | undefined
): TreeNodeType | undefined => {
  for (const node of nodes) {
    if (by(node)) {
      return node;
    }

    if (node.children) {
      const openNode = findNode(node.children, by);
      if (openNode) {
        return openNode;
      }
    }
  }
};

window.addEventListener("keydown", (e) => {
  const activeNode = findNode(
    sampleDataTree,
    (node) => node.isActive
  ) as TreeNodeType;
  const linearData = convertToLinearData(sampleDataTree);

  const handlers: Record<string, () => void> = {
    ArrowDown: () => {
      const index = linearData.findIndex((node) => node === activeNode);
      const nextNode = linearData[index + 1] || linearData[0];

      nextNode.isActive = true;
      activeNode.isActive = false;
    },
    ArrowUp: () => {
      const index = linearData.findIndex((node) => node === activeNode);
      const nextNode =
        linearData[index - 1] || linearData[linearData.length - 1];

      activeNode.isActive = false;
      nextNode.isActive = true;
    },
    Enter: () => {
      if (activeNode.children?.length) {
        activeNode.open = !activeNode.open;
      }
    },
  };

  const handler = handlers[e.key];
  if (handler) {
    handler();
    render();
  }
});

render();
