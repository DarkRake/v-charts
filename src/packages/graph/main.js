export function graph (columns, rows, settings, extra) {
  return {
    tooltip: {
      show: true
    },
    series: [{
      type: 'graph',
      layout: 'force',
      animation: false,
      data: [
        { id: -1, name: 'node-0', value: 0, symbolSize: 5 },
        { id: 1, name: 'node-1', value: 1, symbolSize: 10 },
        { id: 2, name: 'node-2', value: 2, symbolSize: 20 },
        { id: 3, name: 'node-3', value: 3, symbolSize: 30 },
        { id: 4, name: 'node-4', value: 4, symbolSize: 40 },
        { id: 5, name: 'node-5', value: 5, symbolSize: 50 }
      ],
      force: {
        repulsion: 100,
        edgeLength: 5
      },
      links: [
        { source: 1, target: 0 },
        { source: 2, target: 1 },
        { source: 1, target: 2 },
        { source: 1, target: 3 },
        { source: 1, target: 4 },
        { source: 1, target: 5 },
        { source: 1, target: 6 }
      ]
    }]
  }
}
