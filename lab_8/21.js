class Converter {
    constructor(size, unit) {
        switch (unit) {
            case "KB":
                this.sizeB = size * 1024;
                break;
            case "MB":
                this.sizeB = size * 1048576;
                break;
            case "GB":
                this.sizeB = size * 1073741824;
                break;
            case 'TB':
                this.sizeB = size * 1099511627776;
                break;
            default:
                this.sizeB = size
        }
    }

    toB() {
        this.size = this.sizeB;
        this.round();
        this.unit = 'B';
        this.size = this.size + ' ' + this.unit;
    }

    toKB() {
        this.size = this.sizeB / 1024;
        this.round();
        this.unit = 'KB';
        this.size = this.size + ' ' + this.unit;
    }

    toMB() {
        this.size = this.sizeB / 1048576;
        this.round();
        this.unit = 'MB';
        this.size = this.size + ' ' + this.unit;
    }

    toGB() {
        this.size = this.sizeB / 1073741824;
        this.round();
        this.unit = 'GB';
        this.size = this.size + ' ' + this.unit;
    }

    toTB() {
        this.size = this.sizeB / 1099511627776;
        this.round();
        this.unit = 'TB';
        this.size = this.size + ' ' + this.unit;
    }
    round() {
        if (!Number.isInteger(this.size)) {
            this.size = Math.floor(this.size * 1000) / 1000;
        }
    }
}