import React from 'react'
import { connect } from 'react-redux'


import Item from '../components/Item'



const Home = ({ projects }) => (
    <div id='home'>
        <h1>PORTAFOLIO</h1>
        {projects.length === 0 ?
            (<h3>cargando...</h3>) :
            (<div className='list'>{projects.map((project) => <Item key={project.title} {...project} />)}</div>)}
    </div>
)


const mapStateToProps = (state) => {
    return {
        projects: state.form.projects
    }
}

export default connect(mapStateToProps)(Home)