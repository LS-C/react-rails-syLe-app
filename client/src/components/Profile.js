import React from 'react';
import { parseDate1 } from '../services/utils'

const Profile = (props) =>
  <div>
    <p>Email: {props.profile.email}</p>
    <p>Member Since: {parseDate1(props.profile.created_at)}</p>
  </div>

export default Profile
