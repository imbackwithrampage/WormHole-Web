declare global {
    type WormHoleProgress<T = object> = {
        stage: string;
    } & T;

    type WormHoleProgressMessage<_T = WormHoleProgress> = {
        message: string;
    };

    type WormHoleProgressListener<T = WormHoleProgress> = (progress: T) => void;
}

export class DownloadProgress implements WormHoleProgress {
    public readonly stage = 'downloading';

    constructor(
        public readonly receivedBytes: number,
        public readonly totalBytes: number | undefined
    ) { }
}

export class SegmentedDownloadProgress extends DownloadProgress {
    public readonly stage = 'downloading';

    constructor(
        public readonly receivedBytes: number,
        public readonly totalBytes: number | undefined,
        public readonly currentSegment: number,
        public readonly totalSegments: number
    ) {
        super(receivedBytes, totalBytes);
    }
}

export class ProgressMessage implements WormHoleProgressMessage {
    constructor(public readonly message: string) { }
}

export class DownloadProgressMessage extends ProgressMessage {
    constructor(message: string) {
        super(message);
    }
}
