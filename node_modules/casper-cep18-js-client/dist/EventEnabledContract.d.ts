import { Parser } from '@make-software/ces-js-parser';
import { CasperClient, Contracts, EventStream, ExecutionResult } from 'casper-js-sdk';
import { CEP18Event, CEP18EventWithDeployInfo } from './events';
export default class EventEnabledContract {
    nodeAddress: string;
    networkName: string;
    contractClient: Contracts.Contract;
    casperClient: CasperClient;
    eventStream?: EventStream;
    parser?: Parser;
    private readonly events;
    constructor(nodeAddress: string, networkName: string);
    setupEventStream(eventStream: EventStream): Promise<void>;
    on(name: string, listener: (event: CEP18EventWithDeployInfo) => void): void;
    addEventListener(name: string, listener: (event: CEP18EventWithDeployInfo) => void): void;
    off(name: string, listener: (event: CEP18EventWithDeployInfo) => void): void;
    removeEventListener(name: string, listenerToRemove: (event: CEP18EventWithDeployInfo) => void): void;
    emit(event: CEP18EventWithDeployInfo): void;
    parseExecutionResult(result: ExecutionResult): CEP18Event[];
}
