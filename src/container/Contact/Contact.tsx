import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Form } from '../../components';
import './Contact.scss';

const Contact = () => (
  <section id="contact" className="app--wrapper app__contact">
    <h1 className="head--text">Get In Touch</h1>
    <main>
      <p className="p--text">
        <span>
          You have some work for me, an idea you think i can help with, want to
          collaborate with me or just say hello ?
        </span>{' '}
        Feel free to shoot me an email! Don't worry i don't bite
      </p>
      <div className="app__contact--details">
        <div className="app__contact--details--left">
          <h1>For the Form shy</h1>
          <ul className="p--text">
            {[
              [
                'Email',
                <AiOutlineMail />,
                'mail:to enikucaches@gmail.com',
                'enikucaches@gmail.com',
              ],
              [
                'Linkedin',
                <AiOutlineLinkedin />,
                'https://ng.linkedin.com/in/david-enikuomehin',
                'David Enikuomehin',
              ],
              ['Twitter', <AiOutlineTwitter />, 'https://twitter.com/#', 'nil'],
              [
                'Github',
                <AiOutlineGithub />,
                'https://github.com/eniiku',
                'eniiku',
              ],
            ].map(([header, icon, link, text]) => (
              <li key={header.toString()}>
                <a href={link.toString()}>
                  <p>
                    <span>
                      {icon}
                      {header}:
                    </span>{' '}
                    <span> {text}</span>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Form />
      </div>
    </main>
    <div className="app__contact--icons">
      <a href="mail:to enikucaches@gmail.com" aria-label="mail">
        <AiOutlineMail />
      </a>
      <a href="https://github.com/eniiku">
        <AiOutlineGithub />
      </a>
      <a href="https://linkedin.com/davidenikuomehin">
        <AiOutlineLinkedin />
      </a>
      <a href="https://twitter.com/eniiku">
        <AiOutlineTwitter />
      </a>
    </div>
  </section>
);

export default Contact;
