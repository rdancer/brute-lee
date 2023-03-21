/** This code consists of two functions, compress and decompress, that work together to compress and decompress a string message based on a given codeBook. The compress function replaces substrings from message that match a substring in codeBook with a compressed representation, while the decompress function reverses this process to reconstruct the original string. */

function substringCompressAggressive(codeBook, message) {
    let compressedMessage = '';
    let current = '';

    for (const c of message) {
        current += c;

        if (!codeBook.includes(current)) {
            const compressed = `<${codeBook.indexOf(current.slice(0, -1))},${current.length - 1}>`;
            compressedMessage += compressed;
            compressedMessage += c.replace('<', '<<');
            current = '';
        }
    }

    if (current.length > 0) {
        const compressed = `<${codeBook.indexOf(current)},${current.length}>`;
        compressedMessage += compressed;
    }

    return compressedMessage;
}

function substringCompress(codeBook, message) {
    let compressedMessage = '';
    let current = '';

    for (const c of message) {
        current += c;

        if (!codeBook.includes(current)) {
            const compressed = `<${codeBook.indexOf(current.slice(0, -1))},${current.length - 1}>`;
            if (current.length <= compressed.length) {
                compressedMessage += current.replace('<', '<<');
            } else {
                compressedMessage += compressed;
                compressedMessage += c.replace('<', '<<');
            }
            current = '';
        }
    }

    if (current.length > 0) {
        const compressed = `<${codeBook.indexOf(current)},${current.length}>`;
        if (current.length <= compressed.length) {
            compressedMessage += current.replace('<', '<<');
        } else {
            compressedMessage += compressed;
        }
    }

    return compressedMessage;
}

function substringDecompress(codeBook, compressedMessage) {
    let decompressedMessage = '';
    let i = 0;

    while (i < compressedMessage.length) {
        const c = compressedMessage[i];

        if (c === '<') {
            if (i + 1 < compressedMessage.length && compressedMessage[i + 1] === '<') {
                decompressedMessage += '<';
                i += 2;
            } else {
                const j = compressedMessage.indexOf(',', i + 1);
                const start = parseInt(compressedMessage.slice(i + 1, j), 10);
                i = j + 1;
                const k = compressedMessage.indexOf('>', i);
                const length = parseInt(compressedMessage.slice(i, k), 10);
                i = k + 1;
                decompressedMessage += codeBook.slice(start, start + length);
            }
        } else {
            decompressedMessage += c;
            i++;
        }
    }

    return decompressedMessage;
}

function testCompressionDecompression(codeBook, message) {
    const compressedMessage = substringCompress(codeBook, message);
    const decompressedMessage = substringDecompress(codeBook, compressedMessage);

    console.log('Original message:', message);
    console.log('Compressed message:', compressedMessage);
    console.log('Decompressed message:', decompressedMessage);

    if (decompressedMessage === message) {
        console.log('Test passed: decompress(codeBook, compress(codeBook, message)) === message');
    } else {
        throw 'Test failed: decompress(codeBook, compress(codeBook, message)) !== message';
    }
}


function runTests() {
    // Test case 0
    const codeBook = 'abcdefghijklmnopqrstuvwxyz';
    const message = 'hello world! this is a test.';
    testCompressionDecompression(codeBook, message);

    console.log('------------------------------------------');

    // Test case 1
    const codeBook1 = 'abcdefghijklmnopqrstuvwxyz';
    const message1 = 'hello world! this is a test.';
    testCompressionDecompression(codeBook1, message1);

    console.log('------------------------------------------');

    // Test case 2
    const codeBook2 = '0123456789';
    const message2 = 'The total cost is $103.50 for 3 items.';
    testCompressionDecompression(codeBook2, message2);

    console.log('------------------------------------------');

    // Test case 3
    const codeBook3 = 'aeiou';
    const message3 = 'compression and decompression';
    testCompressionDecompression(codeBook3, message3);

    console.log('------------------------------------------');

    // Test case 4
    const codeBook4 = 'abcdefghijklmnopqrstuvwxyz,The quick brown fox jumps over the lazy dog';
    const message4 = 'The quick brown fox jumps over the lazy dog twice!';
    testCompressionDecompression(codeBook4, message4);

    console.log('------------------------------------------');

    // Test case 5
    const codeBook5 = '0123456789,Once upon a time in a land far far away';
    const message5 = 'Once upon a time in a land far far away, there was a kingdom.';
    testCompressionDecompression(codeBook5, message5);

    console.log('------------------------------------------');

    // Test case 6
    const codeBook6 = 'aeiou,To be or not to be that is the question';
    const message6 = 'To be or not to be that is the question: Shakespeare';
    testCompressionDecompression(codeBook6, message6);

    // Test case 7
    const codeBook7 = 'abcdefghijklmnopqrstuvwxyz,Once upon a time';
    const message7 = 'Once upon a time, Alice found a message: <<Hello, World!>>';
    testCompressionDecompression(codeBook7, message7);

    console.log('------------------------------------------');
}

function runTestsAggressive() {
    substringCompress = substringCompressAggressive; // XXX This is a hack to make the function available to the test function
    runTests();
}

runTests();
runTestsAggressive(); // run this last as it modifies the compress function
