import React, { Component } from 'react'
const ADD_COMMENTAIRE = 'ADD_COMMENTAIRE'
export class Plus extends Component {
    state={
        like: 20,
        comment: 1,
        coms: false,
        commentList: [],
        addCommentaire: ''
    }

    handleLike = () => {
        this.setState({
            like: this.state.like + 1
        })
    }

    handleComment = () => {
        this.setState({
            coms: true
        })
    }

    handleChange = (e) => {
        this.setState({
            addCommentaire: e.target.value
        })
    }

    handleComs = () => {
        this.state.commentList.push({   
            id: +1,
            coms: this.state.addCommentaire
        })
        this.setState({
            coms: false
        })
        this.setState({
            comment: this.state.comment +1
        })
    }
    render() {
        const list = this.state.commentList
        const date = new Date();
        const day = date.toLocaleDateString() 


        let comment;
        if(this.state.coms === true){
            comment = (
                <>
                    <br/>
                     <div className="form-group">
                        <textarea name="message" className="form-control" rows="4" placeholder="Votre commentaire" 
                        required="required" onChange={this.handleChange} >
                        </textarea>
                        <div style={{marginRight: '50px'}}>
                            <button type="button" class="btn btn-outline-primary" onClick={this.handleComs}>Commenter</button>
                        </div>
                    </div>    
                </>
            )
        }else{
            comment = (
                <>
                    <div className="entry-header">
                        <h3><a href="#">MELODI , Projet personnel app de vente artistique et des reservation d' evenement </a></h3>
                        <span className="date">janvier , 2021</span>
                        <span className="cetagory">in <strong>Projet personnel</strong></span>
                        </div>
                        <div className="entry-content">
                            <div className="entry-content">
                                <strong>Commentaire : </strong>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <span class="badge bg-primary">18/13/2021 </span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                    </li>
                                    {list && list.map(comment => {
                                        return (
                                            <li class="list-group-item">
                                                <span class="badge bg-primary">{day} </span> 
                                                    {comment.coms}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                    </div>
                </>
            )
        }
       
        return (
            <>
                <div className="blog-posts">
                    <div className="row">
                        <div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
                            <div className="post-thumb">
                            <a href="#"><img className="img-responsive" src="images/portfolio/mp4.png" alt=""/></a> 
                            <div className="post-meta">
                                <span style={{color: 'darkblue'}} onClick={this.handleComment}><i className="fa fa-comments-o"></i> {this.state.comment} Comments</span>
                                <span style={{color: 'darkblue'}} onClick={this.handleLike} href="#"><i className="fa fa-heart"></i> {this.state.like} Likes</span> 
                            </div>
                            <div className="post-icon">
                                <i className="fa fa-pencil"></i>
                            </div>
                            </div>
                            <div className="entry-header">
                            <h3><a href="#">MELODI , Projet personnel app de vente artistique et des reservation d' evenement </a></h3>
                            <span className="date">janvier , 2021</span>
                            <span className="cetagory">in <strong>Projet personnel</strong></span>
                            </div>
                            <div className="entry-content">
                                <strong>Commentaire : </strong>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <span class="badge bg-primary">18/13/2021 </span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                    </li>
                                    {list && list.map(comment => {
                                        return (
                                            <li class="list-group-item">
                                                <span class="badge bg-primary">{day} </span> 
                                                    {comment.coms}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <div className="post-thumb">
                            <div id="post-carousel"  className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                <li data-target="#post-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#post-carousel" data-slide-to="1"></li>
                                <li data-target="#post-carousel" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                <div className="item active">
                                    <a href="#"><img className="img-responsive" src="images/portfolio/home-melodie.png" alt=""/></a>
                                </div>
                                <div className="item">
                                    <a href="#"><img className="img-responsive" src="images/portfolio/mp4.png" alt=""/></a>
                                </div>
                                <div className="item">
                                    <a href="#"><img className="img-responsive" src="images/portfolio/new-melodie.png" alt=""/></a>
                                </div>
                                </div>                               
                                <a className="blog-left-control" href="#post-carousel" role="button" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                                <a className="blog-right-control" href="#post-carousel" role="button" data-slide="next"><i className="fa fa-angle-right"></i></a>
                            </div>                            
                            <div className="post-meta">
                                <span style={{color: 'darkblue'}} onClick={this.handleComment}><i className="fa fa-comments-o"></i> 3 Comments</span>
                                <span style={{color: 'darkblue'}} onClick={this.handleLike} href="#"><i className="fa fa-heart"></i> {this.state.like} Likes</span> 
                            </div>
                            <div className="post-icon">
                                <i className="fa fa-picture-o" ></i>
                            </div>
                            </div>
                            <div>

                                {comment}
                            </div>
                            
                        </div>
                        <div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="800ms">
                            <div className="post-thumb">
                            <a href="#"><img className="img-responsive" src="images/portfolio/new-melodie.png" alt=""/></a>
                            <div className="post-meta">
                                <span style={{color: 'darkblue'}} onClick={this.handleComment}><i className="fa fa-comments-o"></i> 3 Comments</span>
                                <span style={{color: 'darkblue'}} onClick={this.handleLike} href="#"><i className="fa fa-heart"></i> {this.state.like} Likes</span> 
                            </div>
                            <div className="post-icon">
                                <i className="fa fa-video-camera"></i>
                            </div>
                            </div>
                            <div className="entry-header">
                            <h3><a href="#">MELODI , Projet personnel app de vente artistique et des reservation d' evenement </a></h3>
                            <span className="date">janvier , 2021</span>
                            <span className="cetagory">in <strong>Projet personnel</strong></span>
                            </div>
                            <div className="entry-content">
                                <div className="entry-content">
                                    <strong>Commentaire : </strong>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <span class="badge bg-primary">18/13/2021 </span>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                                        </li>
                                        {list && list.map(comment => {
                                            return (
                                                <li class="list-group-item">
                                                    <span class="badge bg-primary">{day} </span> 
                                                        {comment.coms}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>                    
                        </div>
                        {/* <div className="load-more wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                            <a href="#" className="btn-loadmore"><i className="fa fa-repeat"></i> Voire Plus</a>
                        </div>                 */}
                    </div>  
            </>
        )
    }
}

export default Plus
