
const budgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: 'Stay conscious of costs',
    icon: '🤑',
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Keep cost on the average side',
    icon: '💲',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 3,
    title: 'Luxury',
    desc: "Don't worry about cost",
    icon: '💸',
    color: 'bg-purple-100 text-purple-600',
  },
];


function Budget({handleSelectOption} : any) {
  return (
    <div className = 'p-3 grid grid-cols-3 gap-2 items-center mt-1'>
      {
        budgetOptions.map((item) => (
          <div
            key = {item.id}
            className = 'flex justify-start my-3 gap-5 p-3 border rounded-2xl bg-white hover:border-primary cursor-pointer text-black'
            onClick = {() => handleSelectOption(item.title + " " + item.desc)}
          >
            <h2>{item.icon}</h2>
            <h2>{item.title}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Budget
