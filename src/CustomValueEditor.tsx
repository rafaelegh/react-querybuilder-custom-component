import { ValueEditor, ValueEditorProps } from "react-querybuilder";
import { DropdownTreeSelectHOC } from "./DropdownTreeSelectHOC";

import data from "./data/data.json";
import { TreeNode } from "react-dropdown-tree-select";

export const CustomValueEditor = (props: ValueEditorProps) => {
  console.log(props.fieldData.datatype)
  if (props.fieldData.datatype === 'dropdownTreeSelect') {
    return (
      <div>
        <DropdownTreeSelectHOC onChange={(value: unknown) => props.handleOnChange(value)} data={data as unknown as TreeNode[]} />
      </div>
    );
  }
  return <ValueEditor {...props} />;
};