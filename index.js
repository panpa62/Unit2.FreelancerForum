const freelancers = [
    { name: "Dr.Slice", occupation: "gardener", price: 25 },
    { name: "Dr.Pressure", occupation: "programmer", price: 51  },
    { name: "Prof.Possibility", occupation: "teacher", price: 43 },
    { name: "Prof.Prism", occupation: "teacher", price: 81  },
    { name: "Dr.Impulse", occupation: "teacher", price: 43 },
    { name: "Prof.Park", occupation: "programmer", price: 76},
    { name: "Dr.Ire", occupation: "teacher", price: 47 },
    { name: "Prof.Goose", occupation: "driver", price: 72},
  ];

render();
function render() {
  const freeLnames = document.querySelector('#listOfName')
  const freeLnameElements = freelancers.map((freelancer) =>{
    const element = document.createElement("li");
    element.classList.add(freelancer.name, freelancer.occupation, freelancer.price);
    return element;
  });

  freeLnames.replaceChildren(...freeLnameElements );
  //console.log("list of name: " + freeLnameElements )
}

const addFreelancerNameIntervalId = setInterval(addFreelancerName, 5000);
function addFreelancerName (){
  const freeName = freelancers.filter((freelancer) => {return freelancer.name})
  const freeOccu = freelancers.filter((freelancer) => {return freelancer.occupation})
  const freePrice = freelancers.filter((freelancer) => {return freelancer.price})
   freelancers.push[{freeName, freeOccu, freePrice}];
   console.log("freelancers: " + freelancers)
    render();
  
    if (freelancers.length >= 8){
  
      clearInterval(addFreelancerNameIntervalId);
    }
  
}