import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, iif, mergeMap, Observable, of, tap, throwError} from 'rxjs';
import {AmbassadorDto} from 'src/app/modules/ambassador/models/ambassador.dto';
import {SmplChainWalletService} from '@smplfinance/wallet-core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AmbassadorProgramService {
  constructor(
    private httpClient: HttpClient,
    private smplChainWalletService: SmplChainWalletService
  ) {
    this.ambassadorServiceUrl = environment.baseAmbassadorProgramServiceUrl;
  }

  private programName = 'Ambassador Program';
  private ambassador?: AmbassadorDto;
  private readonly ambassadorServiceUrl


  getAmbassador(): Observable<AmbassadorDto | undefined> {
    return iif(
      () => !!this.ambassador,
      of(this.ambassador as AmbassadorDto),
      this.smplChainWalletService.getPrimaryAddress()
        .pipe(
          tap(address => console.log('AmbassadorProgramService got address', address)),
          mergeMap(address => this.httpClient.get<AmbassadorDto>(this.ambassadorServiceUrl + '/ambassador/' + address)),
          tap(ambassador => console.log('AmbassadorProgramService got ambassador', ambassador)),
          tap(ambassador => this.ambassador = ambassador),
          catchError(err => {
            if (err.status === 404) {
              return of(undefined);
            } else {
              return throwError(err)
            }
          }),
        )
    )
  }
}
