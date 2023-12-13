export default function(props){
    const image = props.myData();
   return (<div>
        {
          image.map(item =>{
            return(
              <div key={item.id} className="column">
                <img src={item.img} alt=""></img>
              </div>
            )
          })
        }
      </div>)
}