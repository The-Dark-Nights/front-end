function PostCard(){
    return(
         
        <li class="postCard">
        <div class="postImg">
          <img src="/img/logo.png" alt="" />
          <hr />
        </div>
        <div class="postContents">
          <h3>제목</h3>
          <p>
            /* 홈 페이지 타이틀 변경하기 */ #post-2 .entry-title 
            visibility: hidden; line-height: 0;  #post-2
            .entry-title:before  visibility: visible; content:
            '사이트를 방문해주셔서 감사합니다!'; line-height: 1.2em; 
          </p>
          <hr />
        </div>
        <div class="postComment">
          <div><img src="/img/user.png" alt="" /></div>
          <div class="userName">by pm</div>
          <div class="postCommentBox">
            <div>
              <img src="/img/comment.png" alt="" />
              <p>11</p>
            </div>
            <div>
              <img src="/img/heart.png" alt="" />
              <p>3</p>
            </div>
          </div>
        </div>
      </li>
     
    )
}
export default PostCard;