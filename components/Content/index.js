import React from "react"

export default class Content extends React.Component{
  constructor(props){
    super (props)
  }

  render(){
    return(
      <div>
        {
          this.props.passadati.map((el,index)=>{
            return  <a><img src={el.box_art_url} key={index}></img></a>
          })
        }
        <div>
          {
            this.props.passacat.map((elem,index)=>{
              return <img src={elem.box_art_url} key={index} ></img>
            })
          }
        </div>
      </div>
      
    )
  }
}