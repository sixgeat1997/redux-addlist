import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { passLogin } from '../store/auth/actions'
import { compose } from 'redux'

export default WrapComponent => {
    const withAuth = (props) => {

        const unAuthen = () => (
            <div className="unauthen">
                Unauthen
                <button className="bt-login" onClick={props.passLogin}>Login</button>
            </div>
        )

        return (
            <>
                {props.authStore.isAuthen ? <WrapComponent {...props} /> : <div>{unAuthen()}</div>}
            </>
        )
    }

    const mapStateToProps = state => {
        return {
            authStore: state.authStore
        }
    }

    return compose(
        connect(mapStateToProps, { passLogin })
    )(withAuth)
}
