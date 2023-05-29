import { Component } from 'react';
import DropdownTreeSelect, { TreeNode } from 'react-dropdown-tree-select';
import isEqual from 'lodash/isEqual'
import 'react-dropdown-tree-select/dist/styles.css'

interface DropdownTreeSelectHOCProps {
  data: TreeNode[];
  onChange?: (value: string[]) => void;
}

interface DropdownTreeSelectHOCState {
    data: TreeNode[];
}

export class DropdownTreeSelectHOC extends Component<DropdownTreeSelectHOCProps, DropdownTreeSelectHOCState> {
  constructor(props: DropdownTreeSelectHOCProps){
    super(props)
    this.state = { data: props.data }
  }

  componentWillReceiveProps = (nextProps: DropdownTreeSelectHOCProps) => {
    if(!isEqual(nextProps.data, this.state.data)) {
      this.setState({ data: nextProps.data })
    }
  }

  shouldComponentUpdate = (nextProps: DropdownTreeSelectHOCProps) => {
    return !isEqual(nextProps.data, this.state.data)
  }

  handleOnChange = (_: TreeNode, selectedNodes:TreeNode[]) => {
    const labels = selectedNodes.map(selectedNode => selectedNode.label);
    this.props.onChange?.(labels);
  }

  render() {
    const { data, onChange, ...rest } = this.props;
    console.log('render dropdown');
    return (
      <DropdownTreeSelect onChange={this.handleOnChange} data={this.state.data} {...rest} />
    )
  }
}