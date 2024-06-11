import { Card, Container, Header, ListContainer} from "./styles";

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Guilherme</strong>
              <small>Instagram</small>
            </div>
            <span>gui101023@gmal.com</span>
            <span>(19) 2131233-321321</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete"/>
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Guilherme</strong>
              <small>Instagram</small>
            </div>
            <span>gui101023@gmal.com</span>
            <span>(19) 2131233-321321</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete"/>
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Guilherme</strong>
              <small>Instagram</small>
            </div>
            <span>gui101023@gmal.com</span>
            <span>(19) 2131233-321321</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete"/>
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
