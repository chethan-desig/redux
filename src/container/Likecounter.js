import React, {Component} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class LikeCounter extends Component{
   
    render(){
        return(
            <div className="addlikes-wrapper">
                <h3>How About Articles</h3>
                <div className="addlikes-container">
                    <div className="btn likes"
                    onClick={() => this.addLikes('ADD')}
                   >
                        <div className="hits">
                            {this.props.likes}
                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up"></i>
                        </div>
                    </div>
                    <div className="btn dislikes"
                     onClick={() => this.addLikes('REMOVE')}
                     >
                        <div className="hits">
                            {this.props.dislikes}
                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default connect()(LikeCounter)