export declare enum ERROR_CODES {
    InvalidContext = 60000,
    InsufficientBalance = 60001,
    InsufficientAllowance = 60002,
    Overflow = 60003,
    PackageHashMissing = 60004,
    PackageHashNotPackage = 60005,
    InvalidEventsMode = 60006,
    MissingEventsMode = 60007,
    Phantom = 60008,
    FailedToGetArgBytes = 60009,
    InsufficientRights = 60010,
    InvalidAdminList = 60011,
    InvalidMinterList = 60012,
    InvalidBurnerList = 60013,
    InvalidMintAndBurnList = 60014,
    InvalidNoneList = 60015,
    InvalidEnableMBFlag = 60016,
    AlreadyInitialized = 60017,
    MintBurnDisabled = 60018
}
export declare class ContractError extends Error {
    code: number;
    constructor(code: number);
}
