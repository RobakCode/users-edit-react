import React from 'react';
import { Button } from 'app/UI';

const UserDelete = ({ deleteUser, setDeleteUserId, id }) => <div>
  <Button onClick={() => deleteUser(id)} second>Delete</Button>
  <Button onClick={() => setDeleteUserId(null)} value={0}>Cancel</Button>
</div>

export default UserDelete;