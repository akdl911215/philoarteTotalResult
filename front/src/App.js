import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ScrollIntoView from './webapp/common/helpers/ScrollIntoView';
import ScrollToTop from './webapp/common/helpers/ScrollToTop';

import { ArtistList, Signup, Signin, ArtistRead, ArtistUpdate, Logout, MyPage, AristPageContainer } from 'webapp/artist/index';
import { ArtApp, ArtPage, ArtRegister, ArtDetail, ArtModify } from 'webapp/art';
import { ResumeApp, ResumeModify, ResumeRegister } from 'webapp/resume/index';
import { FundingHome, FundingList, FundingUpdate, FundingRegister, FundingDetail } from 'webapp/funding/index';
import { Review, ReviewModify, ReviewRead, ReviewRegister } from 'webapp/review/index';
import { Reply, ReplyModify, ReplyRegister } from 'webapp/reply';

import { HomeVideoBg } from 'webapp/common/index';

import Sidebar1 from 'webapp/_test/Sidebar1';


// import ArtistRead from 'webapp/artist/component/ArtistRead';
// import ArtistUpdate from 'webapp/artist/component/ArtistUpdate';
// import ArtistList from 'webapp/artist/component/ArtistList';
// import Signin from 'webapp/artist/component/Signin';
// import Signup from 'webapp/artist/component/Signup';

const App = () => {
    return (
        <Router basename="/">
            <ScrollIntoView>
                <ScrollToTop>
                    <Switch>
                        <Route exact path={`/`} component={HomeVideoBg} />

                         {/*Artist*/}
                        <Route exact path="/artist/artist_signin" component={Signin} />
                        <Route exact path="/artist/artist_signup" component={Signup} />
                        <Route exact path="/artist/artist_list" component={ArtistList} />
                        <Route exact path="/artist/artist_read/:id" component={ArtistRead} />
                        <Route exact path="/artist/artist_update/:id" component={ArtistUpdate} />
                        <Route exact path="/artist/artist_page_list" component={AristPageContainer} />


                        {/*Resume*/}
                        <Route exact path="/resume/home" component={ResumeApp} />
                        <Route exact path="/resume/modify/:resumeId" component={ResumeModify} />
                        <Route exact path="/resume/register" component={ResumeRegister} />

                        {/*art*/}
                        <Route exact path="/art" component={ArtApp} />
                        <Route exact path="/art/list" component={ArtPage} />
                        <Route exact path="/art/register" component={ArtRegister} />
                        <Route exact path="/art/read/:id" component={ArtDetail} />
                        <Route exact path="/art/modify/:id" component={ArtModify} />

                        {/*Funding*/}
                        <Route exact path="/funding/list" component={FundingList} />
                        <Route exact path="/funding/modify/:update" component={FundingUpdate} />
                        <Route exact path="/funding/read/:read" component={FundingDetail} />
                        <Route exact path="/funding/register" component={FundingRegister} />
                        <Route exact path="/funding/home" component={FundingHome} />

                        {/*Review*/}
                    <Route exact path='/reviews/review_list' component={Review}/>
                    <Route exact path='/reviews/review_modify/:reviewId' component={ReviewModify}/>
                    <Route exact path='/reviews/review_read/:reviewId' component={ReviewRead}/>
                    <Route exact path='/reviews/review_register' component={ReviewRegister}/>

                           {/*Reply*/}
                    <Route exact path='/replies/reply_list' component={Reply}/>
                    <Route exact path='/replies/reply_modify/:replyId' component={ReplyModify}/>
                    <Route exact path='/replies/reply_register' component={ReplyRegister}/>

                        <Route exact path="/test/sidebar1" component={Sidebar1} />

                        <Switch>
                            <privateRoute exact path="/" component={HomeVideoBg} />
                            <Route exact path="/artist/artist_logout" component={Logout} />
                            <Route exact path="/artist/artist_mypage" component={MyPage} />
                            <Redirect path="*" to="/" />
                        </Switch>
                    </Switch>
                </ScrollToTop>
            </ScrollIntoView>
        </Router>
    );
};

export default App;
