import React, { Fragment } from 'react';
import Layout from './core/Layout';
import { isAuth } from './auth/helpers'

import './App.css';

require('dotenv').config()

const App = () => {

  return (
    <Layout>
      <div className="page-header mt-4 mb-4">
        <h1> Video Conference Control Portal</h1>
      </div>



      {/* <div class="d-none"> */}
      <div>
        <div  className="card mb-5 m-5 ">
          <div className="card-header text-center h3">Notes for the user</div>
          <div className="card-body">

            <div className="row">

              <div className="col mb-4">

                <ul>

                  <li>[Admin user] AddSubject returns error to client, but it is ok in API and DB. Solution review AJAX callback response</li>
                  <li>[All users] You can erase all right up messages by clicking in right bottom bin (orange)</li>
                  <li>[Professor] Embed Jitsi is not finished, all info inside could not be correct, please use links and open in new tab.</li>
                </ul>

              </div>
            </div>


          </div>
        </div>


        <div className="card mb-5 m-5 ">
          <div className="card-header text-center h3">Notes for the developer</div>
          <div className="card-body">

            <div className="row">

              <div className="col mb-4">

                <ul>
                  <li>[Professor] Jutsu implements a unique div with id, a list of Jutsu elements is imposible. solution: create my own react-library for jitsi</li>
                  <li>[Prosody] Prosody mod_token_validation not accept characters that are now in the regular expression ^[a-z-0-9_.-]*$ -> Solution: change generateRoom api or add new field in MongoDB</li>
                </ul>

              </div>
            </div>


          </div>
        </div>
      </div>





      {/* {isAuth() && welcome()} */}


    </Layout>
  )
}




export default App;
