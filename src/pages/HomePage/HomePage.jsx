import PageTitle from '../../components/PageTitle/PageTitle'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <PageTitle>
        Welcome to Our Contact Manager!{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p>Welcome to our web application that makes managing your contacts simple and convenient.</p>
      <h2>Features</h2>
      <article>
        <h3>Registration and Login</h3>
        <ul>
          <li>
            <strong>Quick Registration:</strong> Create an account in just a few seconds.
          </li>
          <li>
            <strong>Easy Login:</strong> Use your username and password to quickly access your
            contacts.
          </li>
        </ul>
      </article>

      <article>
        <h3>Contact Management</h3>
        <ul>
          <li>
            <strong>Add New Contacts:</strong> Easily add new contacts by entering the name and
            phone number.
          </li>
          <li>
            <strong>Edit Contacts:</strong> Update your contact information at any time.
          </li>
          <li>
            <strong>Delete Contacts:</strong> Remove contacts that you no longer need.
          </li>
        </ul>
      </article>
      <h2>Why Choose Us</h2>
      <article>
        <ul>
          <li>
            <strong>Speed:</strong> Our application works quickly and seamlessly.
          </li>
          <li>
            <strong>Accessibility:</strong> Use it on any device – computer, tablet, or smartphone.
          </li>
          <li>
            <strong>Support:</strong> We are always ready to help you with any questions.
          </li>
        </ul>
      </article>

      <p>Join our community and make managing your contacts easy and efficient!</p>
    </div>
  )
}
