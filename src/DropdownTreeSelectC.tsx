import DropdownTreeSelect, { NodeAction, TreeNode } from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

import data from "./data/data.json";

const onChange = (currentNode: TreeNode, selectedNodes:TreeNode[]) => {
  console.log('onChange::', currentNode, selectedNodes)
}
const onAction = (node: TreeNode, action: NodeAction) => {
  console.log('onAction::', action, node)
}
const onNodeToggle = (currentNode: TreeNode) => {
  console.log('onNodeToggle::', currentNode)
}

interface DropdownTreeSelectCProps {
  onChange?: (value: unknown) => void;
}

export function DropdownTreeSelectC({ onChange }: DropdownTreeSelectCProps) {

  const handleOnChange = (currentNode: TreeNode, selectedNodes:TreeNode[]) => {
    console.log(currentNode, selectedNodes)
    onChange?.(currentNode.label)
  }

  return (
    <DropdownTreeSelect data={data} onChange={handleOnChange} onAction={onAction} onNodeToggle={onNodeToggle} />
  )
}
