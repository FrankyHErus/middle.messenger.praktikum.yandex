import Block from '../../utils/block';
import template from './Auth.handlebars';
import { Form } from "../../components/form/form"

const formsData : object[] = [
    {"name": "login", "type": "text", "placeholder": "Login"}, 
    {"name": "password", "type": "password", "placeholder": "Password"}
];

interface AuthPageProps {
    class : string
}
  
export class AuthPage extends Block<AuthPageProps> {
    constructor(props: AuthPageProps) {
        super('main', props);
        this.element?.classList.add("container");
        this.element?.classList.add("container-row");
    }

    init() {
        this.children.forms = new Form({
            data : formsData
        })
    }

    render() { 
        return this.compile(template, this.props);
    }
}
