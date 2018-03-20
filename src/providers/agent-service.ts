import {Injectable} from '@angular/core';
import agents from './data-agents';

@Injectable()
export class AgentService {

    findAll() {
        return Promise.resolve(agents);
    }

    findById(id) {
        return Promise.resolve(agents[id - 1]);
    }

}
