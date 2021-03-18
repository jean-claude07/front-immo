import React, { Component } from 'react'
import Plus from './Plus';

export class Blog extends Component {
    state={
        etape: false,
        like: 20,
        comment: 1,
        coms: false,
        commentList: [],
        addCommentaire: ''
    }

    handleClick = () => {
        this.setState({
            etape: true
        })
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
        let content;
        if(this.state.etape === true){
            content = (
                <>
                    <Plus/>
                </>
            )
        }else{
            content = (
                <>
                    <div className="load-more wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                        <a className="btn-loadmore" onClick={this.handleClick} ><i className="fa fa-repeat"></i> Voire Plus</a>
                    </div>     
                </>
            )
        }

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
                        <h3><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a></h3>
                        <span className="date">June 26, 2014</span>
                        <span className="cetagory">in <strong>Photography</strong></span>
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
                <section id="blog">
                    <div className="container">
                    <div className="row">
                        <div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
                        <h2>Blog Posts</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className="blog-posts">
                        <div className="row">
                        <div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
                            <div className="post-thumb">
                            <a href="#"><img className="img-responsive" src="images/portfolio/espClient-gp.png" alt=""/></a> 
                            <div className="post-meta">
                               <span style={{color: 'darkblue'}} onClick={this.handleComment}><i className="fa fa-comments-o"></i> {this.state.comment} Comments</span>
                                <span style={{color: 'darkblue'}} onClick={this.handleLike} href="#"><i className="fa fa-heart"></i> {this.state.like} Likes</span> 
                            </div>
                            <div className="post-icon">
                                <i className="fa fa-pencil"></i>
                            </div>
                            </div>
                            <div className="entry-header">
                            <h3><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a></h3>
                            <span className="date">June 26, 2014</span>
                            <span className="cetagory">in <strong>Photography</strong></span>
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
                                    <a href="#"><img className="img-responsive" src="images/portfolio/home-gp.png" alt=""/></a>
                                </div>
                                <div className="item">
                                    <a href="#"><img className="img-responsive" src="images/portfolio/espClient-gp.png" alt=""/></a>
                                </div>
                                <div className="item">
                                    <a href="#"><img className="img-responsive" src="images/portfolio/contact-gp.png" alt=""/></a>
                                </div>
                                </div>                               
                                <a className="blog-left-control" href="#post-carousel" role="button" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                                <a className="blog-right-control" href="#post-carousel" role="button" data-slide="next"><i className="fa fa-angle-right"></i></a>
                            </div>                            
                            <div className="post-meta">
                                <span style={{color: 'darkblue'}} onClick={this.handleComment}><i className="fa fa-comments-o"></i> {this.state.comment} Comments</span>
                                <span style={{color: 'darkblue'}} onClick={this.handleLike} href="#"><i className="fa fa-heart"></i> {this.state.like} Likes</span> 
                            </div>
                            <div className="post-icon">
                                <i className="fa fa-picture-o" ></i>
                            </div>
                            </div>
                            {comment}
                        </div>
                        <div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="800ms">
                            <div className="post-thumb">
                            <a href="#"><img className="img-responsive" src="images/portfolio/contact-gp.png" alt=""/></a>
                            <div className="post-meta">
                                <span style={{color: 'darkblue'}} onClick={this.handleComment}><i className="fa fa-comments-o"></i> {this.state.comment} Comments</span>
                                <span style={{color: 'darkblue'}} onClick={this.handleLike} href="#"><i className="fa fa-heart"></i> {this.state.like} Likes</span> 
                            </div>
                            <div className="post-icon">
                                <i className="fa fa-video-camera"></i>
                            </div>
                            </div>
                            <div className="entry-header">
                            <h3><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a></h3>
                            <span className="date">June 26, 2014</span>
                            <span className="cetagory">in <strong>Photography</strong></span>
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
                        </div>
                        <div style={{padding: '15px'}}></div>
                        {content}      
                    </div>
                    </div>
                </section>  
            </>
        )
    }
}

export default Blog
