import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { MemberCardsLayoutGroup } from '../models';
import { AbstractResponse } from '../../shared/common/models';

@Injectable()
export class TeamService {

    constructor(private httpClient: HttpClient) {
    }

    getMembersCardsGroup(): Observable<MemberCardsLayoutGroup[]> {
        return this.httpClient.get<AbstractResponse<MemberCardsLayoutGroup[]>>(`${environment.apiUrl}/api/team`).pipe(
            map(this.mapResponseToMembersCardsLayoutGroups),
        );
    }

    private mapResponseToMembersCardsLayoutGroups(response: AbstractResponse<MemberCardsLayoutGroup[]>): MemberCardsLayoutGroup[] {
        return response.data.map((membersCardsGroup: MemberCardsLayoutGroup) =>
            new MemberCardsLayoutGroup(membersCardsGroup.attributes, membersCardsGroup.id, membersCardsGroup.type));
    }
}
