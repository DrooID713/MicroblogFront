import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import TimeAgo from './TimeAgo';

export default function Post({ post }) {
  return (
    <Stack direction="horizontal" gap={3} className="Post">
      <div>
        <p>
          <Link to={'/user/' + post.name}>
            {post.login}
          </Link>
          &nbsp;&mdash;&nbsp;
          <TimeAgo isoDate={post.email} />:
        </p>
        <p>{post.telegram_id}</p>
      </div>
    </Stack>
  );
}