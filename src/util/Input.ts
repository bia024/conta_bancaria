import * as iconv from 'iconv-lite';
 
/**
 * Classe Input - Solução para leitura de caracteres acentuados com o readline-sysnc no Windows
 *
 * PROBLEMA:
 * - No Windows, o console usa a codificação CP850 (não UTF-8)
 * - Quando você digita "João", o console envia bytes em CP850
 * - O Node.js interpreta como UTF-8 e fica "Joo" (perde os acentos)
 *
 * SOLUÇÃO:
 * - Esta classe converte automaticamente CP850 → UTF-8
 * - Você digita "João" e a variável recebe "João" corretamente!
 *
 */
export class Input {
   
    /** Controla se já detectou o encoding (detecta apenas uma vez) */
    private static configurado = false;
   
    /** Armazena o encoding do console (cp850, cp1252 ou utf8) */
    private static encodingConsole: string = 'cp850';
   
    /**
     * Detecta qual encoding o console do Windows está usando
     *
     * Executa o comando 'chcp' para descobrir o Code Page ativo:
     * - 65001 = UTF-8
     * - 850 = CP850 (padrão no Brasil)
     * - 1252 = CP1252 (Windows Latin-1)
     *
     * Esta detecção acontece apenas UMA vez (na primeira chamada)
     */
    private static detectarEncoding(): void {
       
        // Se já detectou antes, não faz novamente
        if (this.configurado) return;
       
        // Só precisa detectar no Windows (Linux/Mac já usam UTF-8)
        if (process.platform === 'win32') {
            try {
                // Executa o comando 'chcp' no Windows
                const { execSync } = require('child_process');
                const resultado = execSync('chcp', { encoding: 'utf8' }).toString();
               
                // Extrai o número do code page (ex: "850" de "Página de código ativa: 850")
                const match = resultado.match(/\d+/);
               
                if (match) {
                    const codePage = match[0];
                   
                    // Define o encoding baseado no code page
                    this.encodingConsole = codePage === '65001' ? 'utf8' :
                                          codePage === '850' ? 'cp850' :
                                          codePage === '1252' ? 'cp1252' : `cp${codePage}`;
                }
            } catch (error) {
                // Se falhar, assume CP850 (padrão mais comum no Brasil)
                this.encodingConsole = 'cp850';
            }
        } else {
            // Linux/Mac sempre usam UTF-8
            this.encodingConsole = 'utf8';
        }
       
        // Marca como já configurado
        this.configurado = true;
    }
   
    /**
     * Lê uma linha de texto com acentuação correta
     *
     * USO: Para ler TEXTO (nomes, endereços, etc.)
     *
     * COMO FUNCIONA:
     * 1. Detecta o encoding do console
     * 2. Lê a resposta como 'binary' (bytes brutos)
     * 3. Converte de CP850 → UTF-8
     * 4. Retorna a string UTF-8 correta
     *
     */
    static question(pergunta: string): string {
 
        // Detecta o encoding (só na primeira vez)
        this.detectarEncoding();
       
        const readlinesync = require('readline-sync');
       
        // Se o console NÃO está em UTF-8, precisa converter
        if (this.encodingConsole !== 'utf8') {
 
            // Lê a resposta como 'binary' (bytes brutos em CP850)
            const respostaRaw = readlinesync.question(pergunta, {
                encoding: 'binary'
            });
           
            // Converte os bytes de CP850 → UTF-8
            const buffer = Buffer.from(respostaRaw, 'binary');
            return iconv.decode(buffer, this.encodingConsole);
 
        } else {
            // Console já está em UTF-8, lê direto
            return readlinesync.question(pergunta);
        }
    }
 
    /**
     * Lê um número INTEIRO com validação automática
     *
     * USO: Para ler NÚMEROS INTEIROS (idade, quantidade, opção do menu)
     *
     */
    static questionInt(pergunta: string): number {
        const readlinesync = require('readline-sync');
 
        // Usa o método nativo do readline-sync que já faz todas as validações
        return readlinesync.questionInt(pergunta, {
            limitMessage: "Digite um numero inteiro"
        });
    }
 
    /**
     * Lê um número DECIMAL com validação automática
     *
     * USO: Para ler NÚMEROS DECIMAIS (preço, saldo, nota)
     *
     */
    static questionFloat(pergunta: string): number {
        const readlinesync = require('readline-sync');
 
        // Usa o método nativo do readline-sync que já faz todas as validações
        return readlinesync.questionFloat(pergunta, {
            limitMessage: "Digite um numero decimal"
        });
    }
 
    /**
     * Exibe um menu de opções para o usuário escolher
     *
     * USO: Para campos SELECT (escolher entre várias opções)
     *
     */
    static keyInSelect(opcoes: string[], pergunta: string, config?: any): number {
        const readlinesync = require('readline-sync');
 
        return readlinesync.keyInSelect(opcoes, pergunta, config);
    }
 
    /**
     * Pausa e aguarda o usuário pressionar ENTER
     *
     * USO: Para PAUSAR o programa (ex: "Pressione ENTER para continuar...")
     *
     */
    static prompt(): void {
        const readlinesync = require('readline-sync');
 
        readlinesync.prompt();
    }
   
    /**
     * Retorna qual encoding está sendo usado (útil para debug)
     *
     * USO: Para DEBUGAR problemas de acentuação
     *
     */
    static getEncoding(): string {
        this.detectarEncoding();
 
        return this.encodingConsole;
    }
}