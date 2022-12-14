import Block from '../../utils/block';
import template from './Settings.handlebars';
import { Form } from "../../components/form/form"

const formsData : object[] = [
    {"name": "first_name", "type": "text", "placeholder": "First name"},
    {"name": "second_name", "type": "text", "placeholder": "Second name"},  
    {"name": "display_name", "type": "text", "placeholder": "Display name"},
    {"name": "phone", "type": "text", "placeholder": "Phone"}, 
    {"name": "email", "type": "email", "placeholder": "Email"}, 
    {"name": "login", "type": "text", "placeholder": "Login"},
    {"name": "oldPassword", "type": "password", "placeholder": "Old Password"},
    {"name": "newPassword", "type": "password", "placeholder": "New Password"}
];


interface SettPageProps {
}
  
export class SettPage extends Block<SettPageProps> {
    constructor(props: SettPageProps) {
        super('main', props);
        this.element?.classList.add("container");
        this.element?.classList.add("container-settings"); 
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
