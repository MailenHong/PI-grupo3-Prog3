import React, { Component } from 'react';
import Card from '../../Components/Card/Card';



//componente con estado

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = { //estado inicial del estado, priemra vez que el componente se carga
            data : [],
            loading: true,

        }
    }
    componentDidMount(){
        console.log(this.props)
        const {id} = this.props.match.params
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({data: data, loading: false})
        })

    }
    render(){
        return(
            <React.Fragment>
                {(this.state.loading == true) ? <h3> Cargando... </h3> :
                 <Card data = {this.state.data}/>}
                
                
            </React.Fragment>
                
        )
    }
    
    


}
export default Detalle;