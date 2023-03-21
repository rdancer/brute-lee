#!/usr/bin/env python3

class Khabib:


    """
    This code consists of method pairs, compress and decompress, that work together to compress and decompress a string message based on a given code_book. The compress function , while the decompress function reverses this process to reconstruct the original string.

    This class is named in honor of Khabib Nurmagomedov, the undefeated UFC lightweight champion, who is known for his ability to compress his opponents into submission.
    ```
    """


def substring_compress_aggressive(code_book, message):
    """replaces substrings from message that match a substring in code_book with a compressed representation of the substring in the form <index,length> where index is the index of the substring in code_book and length is the length of the substring in code_book. The compressor will aggressively replace any substring that is found in the code_book, even if the compressed representation is longer than the original substring -- this should make the result more compressible with a general compression algorithm such as Deflate or LZMA."""
    compressed_message = ''
    current = ''
    
    for c in message:
        current += c

        if current not in code_book:
            compressed = f'<{code_book.index(current[:-1])},{len(current) - 1}>'
            compressed_message += compressed
            if c == '<':
                compressed_message += '<'
            compressed_message += c
            current = ''

    if len(current) > 0:
        compressed = f'<{code_book.index(current)},{len(current)}>'
        compressed_message += compressed

    return compressed_message


def substring_compress(code_book, message):
    return substring_compress_conservative(code_book, message)


def substring_compress_conservative(code_book, message):
    """replaces substrings from message that match a substring in code_book with a compressed representation of the substring in the form <index,length> where index is the index of the substring in code_book and length is the length of the substring in code_book. If the compressed representation is longer than the original substring, the original substring is returned."""

    compressed_message = ''
    current = ''

    for c in message:
        current += c

        if current not in code_book:
            compressed = f"<{code_book.index(current[:-1])},{len(current) - 1}>"
            if len(current) <= len(compressed):
                compressed_message += current.replace('<', '<<')
            else:
                compressed_message += compressed
                compressed_message += c.replace('<', '<<')
            current = ''

    if len(current) > 0:
        compressed = f"<{code_book.index(current)},{len(current)}>"
        if len(current) <= len(compressed):
            compressed_message += current.replace('<', '<<')
        else:
            compressed_message += compressed

    return compressed_message


def substring_decompress(code_book, compressed_message):
    decompressed_message = ''
    i = 0

    while i < len(compressed_message):
        c = compressed_message[i]

        if c == '<':
            if i + 1 < len(compressed_message) and compressed_message[i + 1] == '<':
                decompressed_message += '<'
                i += 2
            else:
                j = compressed_message.index(',', i + 1)
                start = int(compressed_message[i + 1:j])
                i = j + 1
                j = compressed_message.index('>', i)
                length = int(compressed_message[i:j])
                i = j + 1
                decompressed_message += code_book[start:start + length]
        else:
            decompressed_message += c
            i += 1

    return decompressed_message


def test_compression_decompression(code_book, message):
    compressed_message = substring_compress(code_book, message)
    decompressed_message = substring_decompress(code_book, compressed_message)

    print(f"Original message: {message}")
    print(f"Compressed message: {compressed_message}")
    print(f"Decompressed message: {decompressed_message}")

    if decompressed_message == message:
        # print("Test passed: substring_decompress(code_book, substring_compress(code_book, message)) == message")
        return True
    else:
        raise ("Test failed: substring_decompress(code_book, substring_compress(code_book, message)) != message")


def run_tests_aggressive():
    global substring_compress
    substring_compress = substring_compress_aggressive # XXX This is a hack to make the function available to the test function
    run_tests()


def run_tests():
    print("Running tests...")

    # Preliminary tests
    
    test_compression_decompression(
        'abcdefghijklmnopqrstuvwxyz', 'hello world! this is a test.')
    test_compression_decompression(
        'abcdefghijklmnopqrstuvwxyz', 'hello world! this is a test. hello world! this is a test.')
    test_compression_decompression(
        'one two three four five six seven eight nine ten', 'one two three four five six seven eight nine ten')
    test_compression_decompression(
        '/path/to file, with spaces', '/path/to file, with spaces')

    test_compression_decompression('["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]',
                                   '[["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]')

    # Test case 1
    system1 = 'abcdefghijklmnopqrstuvwxyz,foo,bar'
    target1 = 'hello world! foo,bar,foo,bar.'
    test_compression_decompression(system1, target1)

    print('------------------------------------------')

    # Test case 2
    system2 = '0123456789,one,two,three'
    target2 = 'one plus two equals three: 1 + 2 = 3'
    test_compression_decompression(system2, target2)

    print('------------------------------------------')

    # Test case 3
    system3 = 'aeiou,compression,decompression'
    target3 = 'compression and decompression'
    test_compression_decompression(system3, target3)

    # Test case 4
    code_book4 = 'abcdefghijklmnopqrstuvwxyz,The quick brown fox jumps over the lazy dog'
    message4 = 'The quick brown fox jumps over the lazy dog twice!'
    test_compression_decompression(code_book4, message4)

    print('------------------------------------------')

    # Test case 5
    code_book5 = '0123456789,Once upon a time in a land far far away'
    message5 = 'Once upon a time in a land far far away, there was a kingdom.'
    test_compression_decompression(code_book5, message5)

    print('------------------------------------------')

    # Test case 6
    code_book6 = 'aeiou,To be or not to be that is the question'
    message6 = 'To be or not to be that is the question: Shakespeare'
    test_compression_decompression(code_book6, message6)

    # Test case 7
    code_book7 = 'abcdefghijklmnopqrstuvwxyz,Once upon a time'
    message7 = 'Once upon a time, Alice found a message: <<Hello, World!>>'
    test_compression_decompression(code_book7, message7)

    print('------------------------------------------')


if __name__ == '__main__':
    print("Running tests...")
    print("Conservative tests:")
    run_tests()

    print("====================================================================================")
    print("Aggressive tests:")
    print("====================================================================================")

    run_tests_aggressive() # Call this last, as it changes the default compression function
