import * as iconv from 'iconv-lite';

export class Input {
    
    static keyInYNStrict(pergunta: string): boolean {
        const readlinesync = require('readline-sync');
        return readlinesync.keyInYNStrict(pergunta);
    }
   
    private static configurado = false;
    private static encodingConsole: string = 'cp850';
   
    private static detectarEncoding(): void {
        if (this.configurado) return;
        
        if (process.platform === 'win32') {
            try {
                const { execSync } = require('child_process');
                const resultado = execSync('chcp', { encoding: 'utf8' }).toString();
                const match = resultado.match(/\d+/);
                
                if (match) {
                    const codePage = match[0];
                    this.encodingConsole = codePage === '65001' ? 'utf8' :
                                          codePage === '850' ? 'cp850' :
                                          codePage === '1252' ? 'cp1252' : `cp${codePage}`;
                }
            } catch (error) {
                this.encodingConsole = 'cp850';
            }
        } else {
            this.encodingConsole = 'utf8';
        }
        this.configurado = true;
    }
   
    
    static question(pergunta: string, p0?: { defaultInput: string; }): string {
        this.detectarEncoding();
        const readlinesync = require('readline-sync');
        
        const options = {
            encoding: this.encodingConsole !== 'utf8' ? 'binary' : 'utf8',
            defaultInput: p0?.defaultInput
        };

        const respostaRaw = readlinesync.question(pergunta, options);
        
        if (this.encodingConsole !== 'utf8') {
            const buffer = Buffer.from(respostaRaw, 'binary');
            return iconv.decode(buffer, this.encodingConsole);
        }
        return respostaRaw;
    }
 

    static questionInt(pergunta: string, p0?: { defaultInput: number; }): number {
        const readlinesync = require('readline-sync');
        return readlinesync.questionInt(pergunta, {
            limitMessage: "Digite um numero inteiro",
            defaultInput: p0?.defaultInput
        });
    }
 
    static questionFloat(pergunta: string, p0?: { defaultInput: number; }): number {
        const readlinesync = require('readline-sync');
        return readlinesync.questionFloat(pergunta, {
            limitMessage: "Digite um numero decimal",
            defaultInput: p0?.defaultInput
        });
    }
 
    static keyInSelect(opcoes: string[], pergunta: string, config?: any): number {
        const readlinesync = require('readline-sync');
        return readlinesync.keyInSelect(opcoes, pergunta, config);
    }
 
    static prompt(): void {
        const readlinesync = require('readline-sync');
        readlinesync.prompt();
    }
   
    static getEncoding(): string {
        this.detectarEncoding();
        return this.encodingConsole;
    }
}