const noflo = require('noflo');

exports.getComponent = () => {
  const c = new noflo.Component();
  c.description = '';
  c.icon = 'chain';
  c.inPorts.add('in', {
    datatype: 'all',
    description: 'Packet to forward'
  });
  c.inPorts.add('wait', {
    datatype: 'all',
    description: 'Packet to forward'
  });
  c.inPorts.add('request', {
    datatype: 'all',
    description: 'Packet to forward'
  });
  c.inPorts.add('block', {
    datatype: 'all',
    description: 'Packet to forward'
  });
  c.outPorts.add('out', {
    datatype: 'all'
  });
  c.process((input, output) => {
    // Check preconditions on input data
    if (!input.hasData('in')) {
      return;
    }
    // Read packets we need to process
    const data = input.getData('in');
    // Process data and send output
    output.send({
      out: data
    });
    // Deactivate
    output.done();
  });
  return c;
};
