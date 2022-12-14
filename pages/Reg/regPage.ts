import Block from '../../utils/block';
import template from './Reg.handlebars';
import { Form } from "../../components/form/form"

const formsData : object[] = [
    {"name": "first_name", "type": "text", "placeholder": "First name"}, 
    {"name": "second_name", "type": "text", "placeholder": "Second name"}, 
    {"name": "phone", "type": "text", "placeholder": "Phone"}, 
    {"name": "email", "type": "text", "placeholder": "Email"}, 
    {"name": "login", "type": "text", "placeholder": "Login"}, 
    {"name": "password", "type": "password", "placeholder": "Password"}
];


interface RegPageProps {
}
  
export class RegPage extends Block<RegPageProps> {
    constructor(props: RegPageProps) {
        super('main', props);
        this.element?.classList.add("container");
        this.element?.classList.add("container-column");
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
