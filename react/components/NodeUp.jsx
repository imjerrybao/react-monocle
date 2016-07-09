import React from 'react';
import { Table, Heading, Text } from 'rebass';



function NodeUp(props) {
  // booleans to determine what needs to be dipslayed
  const propsBool = props.props.length > 0;
  const stateBool = props.state.length > 0;
  // headings for the respective tables
  const propsHeadings = ['prop', 'parent', 'value'];
  const stateHeadings = ['state', 'value'];
  const style = {
    backgroundColor: '#FAFAFA',
    padding: '1em 1em 1em 1em',
    border: '1px solid #78909C',
    borderRadius: '10px',
  };

  // formatting the data for table usage
  const stateData = props.state.reduce((a, b) => {
    return a.concat([[b.name, JSON.stringify(b.value, null, 2)]]);
  }, []);
  const propsData = props.props.reduce((a, b) => {
    return a.concat([[b.name, b.parent, JSON.stringify(b.value, null, 2)]]);
  }, []);
  return (
    <div style={style}>
    {
      stateBool ? (<div><Heading>STATE</Heading>
        <Table
          data={stateData}
          headings={stateHeadings}
        /></div>)
      : null
    }
     {propsBool ? (<div><Heading>PROPS</Heading>
       <Table
         data={propsData}
         headings={propsHeadings}
       /></div>)
      : null
    }
    {
      (!propsBool && !stateBool) ? <Heading>nothing to see here!</Heading>
      : null
    }
      <Heading>EVENTS</Heading>
      <Text>coming soon(ish)</Text>
    </div>
  );
}

NodeUp.propTypes = {
  props: React.PropTypes.array,
  state: React.PropTypes.array,
};

NodeUp.defaultProps = {
  props: [],
  state: [],
};


export default NodeUp;