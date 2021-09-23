import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ name }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>Task Tracker {name}</h1>
            <Button color='green' text='add' onClick={onClick}/>
        </header>
    )
}

//this will be a default name props 
Header.defaultProps = {
    name: 'by react',
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//     color: 'red',
//     background: 'black'
// }
export default Header