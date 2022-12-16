export default function (page) {
  return [
    {
      title: 'No.',
      key: 'index',
      width: 50,
      render: (text, record, index) => (page - 1) * 10 + index + 1,
    },
    {
      title: 'Sarlavha',
      dataIndex: 'title',
      key: 'title',
    },
  ];
}