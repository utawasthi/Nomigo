import React from 'react'

const groupOptions = [{ 
    id: "solo", 
    title: "Solo", 
    desc: "A solo traveler", 
    icon: "🧍",
    people: 1 
  },
  { 
    id: "couple", 
    title: "Couple", 
    desc: "Two people traveling together", 
    icon: "💑", 
    people: 2 
  },
  { 
    id: "family", 
    title: "Family", 
    desc: "Family trip with kids", 
    icon: "👨‍👩‍👧‍👦", 
    people: 4 
  },
  { 
    id: "friends", 
    title: "Friends", 
    desc: "Traveling with friends", 
    icon: "🧑‍🤝‍🧑", 
    people: 3 
  }];

function GroupSize({handleSelectOption} : any) {
  return (
    <div className = 'p-3 grid grid-cols-2 gap-2 items-center mt-1'>
      {
        groupOptions.map((item) => (
          <div
            key = {item.id}
            className = 'flex justify-start my-3 gap-5 p-3 border rounded-2xl bg-white hover:border-primary cursor-pointer text-black'
            onClick = {() => handleSelectOption(item.title + " " + item.people)}
          >
            <h2>{item.icon}</h2>
            <h2>{item.title}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default GroupSize
