import { Card } from './Card'
import { NavBar } from './NavBar'

export function FrameworksPage() {
  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="row p-5">
          <div className="col">
            <Card imageUrl={ANGULAR_URL} title="Angular" description={LOREM_IPSUM} />
          </div>

          <div className="col">
            <Card imageUrl={REACT_URL} title="React" description={LOREM_IPSUM} />
          </div>

          <div className="col">
            <Card imageUrl={VUE_URL} title="Vue" description={LOREM_IPSUM} />
          </div>
        </div>
      </div>
    </div>
  )
}

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et dui eget urna molestie pellentesque egestas eget lorem. Fusce et porttitor leo. Nulla vel convallis orci.'

const ANGULAR_URL = 'https://www.alvantia.com/wp-content/uploads/2018/10/imagen-Angular-2.jpg'
const REACT_URL = 'https://reactjs.org/logo-og.png'
const VUE_URL = 'https://miro.medium.com/max/1400/1*vj-6rx5pN8aoQcbs_z0CKw.jpeg'
