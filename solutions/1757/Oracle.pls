/*
 * language: Oracle PL/SQL
 * problem: 1757. Recyclable and Low Fat Products
 * link: https://leetcode.com/problems/recyclable-and-low-fat-products/
 * note: template Oracle
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
/* Write your PL/SQL query statement below */
WITH 
literal_table AS (
  SELECT 0 AS test_number, 1 AS product_id FROM DUAL
UNION ALL SELECT 0, 3 FROM DUAL

UNION ALL SELECT 1, 821 FROM DUAL
UNION ALL SELECT 1, 391 FROM DUAL
UNION ALL SELECT 1, 839 FROM DUAL
UNION ALL SELECT 1, 582 FROM DUAL
UNION ALL SELECT 1, 658 FROM DUAL
UNION ALL SELECT 1, 894 FROM DUAL
UNION ALL SELECT 1, 408 FROM DUAL
UNION ALL SELECT 1, 426 FROM DUAL
UNION ALL SELECT 1, 492 FROM DUAL

UNION ALL SELECT 2, 643 FROM DUAL
UNION ALL SELECT 2, 523 FROM DUAL
UNION ALL SELECT 2, 743 FROM DUAL
UNION ALL SELECT 2, 29 FROM DUAL
UNION ALL SELECT 2, 959 FROM DUAL
UNION ALL SELECT 2, 50 FROM DUAL
UNION ALL SELECT 2, 665 FROM DUAL
UNION ALL SELECT 2, 174 FROM DUAL
UNION ALL SELECT 2, 418 FROM DUAL
UNION ALL SELECT 2, 350 FROM DUAL
UNION ALL SELECT 2, 97 FROM DUAL
UNION ALL SELECT 2, 640 FROM DUAL
UNION ALL SELECT 2, 928 FROM DUAL
UNION ALL SELECT 2, 106 FROM DUAL

UNION ALL SELECT 3, 236 FROM DUAL 
UNION ALL SELECT 3, 378 FROM DUAL 
UNION ALL SELECT 3, 289 FROM DUAL 
UNION ALL SELECT 3, 369 FROM DUAL 
UNION ALL SELECT 3, 503 FROM DUAL 
UNION ALL SELECT 3, 330 FROM DUAL 
UNION ALL SELECT 3, 473 FROM DUAL 
UNION ALL SELECT 3, 270 FROM DUAL 
UNION ALL SELECT 3, 708 FROM DUAL 
UNION ALL SELECT 3, 32 FROM DUAL 
UNION ALL SELECT 3, 699 FROM DUAL 
UNION ALL SELECT 3, 859 FROM DUAL 
UNION ALL SELECT 3, 623 FROM DUAL 
UNION ALL SELECT 3, 866 FROM DUAL 

UNION ALL SELECT 4, 946 FROM DUAL 
UNION ALL SELECT 4, 456 FROM DUAL 
UNION ALL SELECT 4, 382 FROM DUAL 
UNION ALL SELECT 4, 243 FROM DUAL 
UNION ALL SELECT 4, 788 FROM DUAL 
UNION ALL SELECT 4, 636 FROM DUAL 
UNION ALL SELECT 4, 32 FROM DUAL 
UNION ALL SELECT 4, 531 FROM DUAL 
UNION ALL SELECT 4, 257 FROM DUAL 
UNION ALL SELECT 4, 155 FROM DUAL 
UNION ALL SELECT 4, 557 FROM DUAL 
UNION ALL SELECT 4, 563 FROM DUAL 
UNION ALL SELECT 4, 995 FROM DUAL 
UNION ALL SELECT 4, 147 FROM DUAL 
UNION ALL SELECT 4, 43 FROM DUAL 

UNION ALL SELECT 5, 893 FROM DUAL 
UNION ALL SELECT 5, 700 FROM DUAL 
UNION ALL SELECT 5, 328 FROM DUAL 
UNION ALL SELECT 5, 737 FROM DUAL 
UNION ALL SELECT 5, 544 FROM DUAL 
UNION ALL SELECT 5, 378 FROM DUAL 
UNION ALL SELECT 5, 248 FROM DUAL 
UNION ALL SELECT 5, 271 FROM DUAL 
UNION ALL SELECT 5, 820 FROM DUAL 
UNION ALL SELECT 5, 200 FROM DUAL 
UNION ALL SELECT 5, 640 FROM DUAL 
UNION ALL SELECT 5, 55 FROM DUAL 
UNION ALL SELECT 5, 852 FROM DUAL 
UNION ALL SELECT 5, 588 FROM DUAL 
UNION ALL SELECT 5, 243 FROM DUAL 
UNION ALL SELECT 5, 176 FROM DUAL 
UNION ALL SELECT 5, 776 FROM DUAL 
UNION ALL SELECT 5, 936 FROM DUAL 
UNION ALL SELECT 5, 463 FROM DUAL 
UNION ALL SELECT 5, 671 FROM DUAL 
UNION ALL SELECT 5, 8 FROM DUAL 
UNION ALL SELECT 5, 68 FROM DUAL 

UNION ALL SELECT 6, 937 FROM DUAL 
UNION ALL SELECT 6, 628 FROM DUAL 
UNION ALL SELECT 6, 731 FROM DUAL 
UNION ALL SELECT 6, 826 FROM DUAL 
UNION ALL SELECT 6, 314 FROM DUAL 
UNION ALL SELECT 6, 584 FROM DUAL 
UNION ALL SELECT 6, 631 FROM DUAL 
UNION ALL SELECT 6, 330 FROM DUAL 
UNION ALL SELECT 6, 612 FROM DUAL 
UNION ALL SELECT 6, 255 FROM DUAL 
UNION ALL SELECT 6, 97 FROM DUAL 
UNION ALL SELECT 6, 917 FROM DUAL 
UNION ALL SELECT 6, 342 FROM DUAL 
UNION ALL SELECT 6, 390 FROM DUAL 
UNION ALL SELECT 6, 458 FROM DUAL 
UNION ALL SELECT 6, 974 FROM DUAL 
UNION ALL SELECT 6, 542 FROM DUAL 
UNION ALL SELECT 6, 29 FROM DUAL 
UNION ALL SELECT 6, 46 FROM DUAL 
UNION ALL SELECT 6, 157 FROM DUAL 
UNION ALL SELECT 6, 975 FROM DUAL 
UNION ALL SELECT 6, 945 FROM DUAL 

UNION ALL SELECT 7, 785 FROM DUAL 
UNION ALL SELECT 7, 8 FROM DUAL 
UNION ALL SELECT 7, 823 FROM DUAL 
UNION ALL SELECT 7, 334 FROM DUAL 
UNION ALL SELECT 7, 245 FROM DUAL 
UNION ALL SELECT 7, 108 FROM DUAL 
UNION ALL SELECT 7, 70 FROM DUAL 
UNION ALL SELECT 7, 340 FROM DUAL 
UNION ALL SELECT 7, 534 FROM DUAL 
UNION ALL SELECT 7, 839 FROM DUAL 
UNION ALL SELECT 7, 337 FROM DUAL 
UNION ALL SELECT 7, 479 FROM DUAL 
UNION ALL SELECT 7, 848 FROM DUAL 
UNION ALL SELECT 7, 30 FROM DUAL 
UNION ALL SELECT 7, 663 FROM DUAL 
UNION ALL SELECT 7, 149 FROM DUAL 
UNION ALL SELECT 7, 652 FROM DUAL 
UNION ALL SELECT 7, 644 FROM DUAL 
UNION ALL SELECT 7, 61 FROM DUAL 
UNION ALL SELECT 7, 388 FROM DUAL 
UNION ALL SELECT 7, 98 FROM DUAL 
UNION ALL SELECT 7, 519 FROM DUAL 
UNION ALL SELECT 7, 86 FROM DUAL 
UNION ALL SELECT 7, 407 FROM DUAL 
UNION ALL SELECT 7, 863 FROM DUAL 
UNION ALL SELECT 7, 88 FROM DUAL 
UNION ALL SELECT 7, 604 FROM DUAL 
UNION ALL SELECT 7, 115 FROM DUAL 
UNION ALL SELECT 7, 671 FROM DUAL 
UNION ALL SELECT 7, 514 FROM DUAL 

UNION ALL SELECT 8, 901 FROM DUAL 
UNION ALL SELECT 8, 631 FROM DUAL 
UNION ALL SELECT 8, 953 FROM DUAL 
UNION ALL SELECT 8, 70 FROM DUAL 
UNION ALL SELECT 8, 98 FROM DUAL 
UNION ALL SELECT 8, 290 FROM DUAL 
UNION ALL SELECT 8, 737 FROM DUAL 
UNION ALL SELECT 8, 819 FROM DUAL 
UNION ALL SELECT 8, 410 FROM DUAL 
UNION ALL SELECT 8, 902 FROM DUAL 
UNION ALL SELECT 8, 529 FROM DUAL 
UNION ALL SELECT 8, 245 FROM DUAL 
UNION ALL SELECT 8, 150 FROM DUAL 
UNION ALL SELECT 8, 946 FROM DUAL 
UNION ALL SELECT 8, 456 FROM DUAL 
UNION ALL SELECT 8, 954 FROM DUAL 
UNION ALL SELECT 8, 532 FROM DUAL 
UNION ALL SELECT 8, 817 FROM DUAL 
UNION ALL SELECT 8, 463 FROM DUAL 
UNION ALL SELECT 8, 724 FROM DUAL 
UNION ALL SELECT 8, 359 FROM DUAL 
UNION ALL SELECT 8, 936 FROM DUAL 
UNION ALL SELECT 8, 930 FROM DUAL 
UNION ALL SELECT 8, 608 FROM DUAL 
UNION ALL SELECT 8, 79 FROM DUAL 
UNION ALL SELECT 8, 175 FROM DUAL 
UNION ALL SELECT 8, 746 FROM DUAL 
UNION ALL SELECT 8, 632 FROM DUAL 
UNION ALL SELECT 8, 123 FROM DUAL 

UNION ALL SELECT 9, 462 FROM DUAL 
UNION ALL SELECT 9, 613 FROM DUAL 
UNION ALL SELECT 9, 391 FROM DUAL 
UNION ALL SELECT 9, 752 FROM DUAL 
UNION ALL SELECT 9, 336 FROM DUAL 
UNION ALL SELECT 9, 938 FROM DUAL 
UNION ALL SELECT 9, 191 FROM DUAL 
UNION ALL SELECT 9, 163 FROM DUAL 
UNION ALL SELECT 9, 720 FROM DUAL 
UNION ALL SELECT 9, 495 FROM DUAL 
UNION ALL SELECT 9, 967 FROM DUAL 
UNION ALL SELECT 9, 767 FROM DUAL 
UNION ALL SELECT 9, 333 FROM DUAL 
UNION ALL SELECT 9, 772 FROM DUAL 
UNION ALL SELECT 9, 496 FROM DUAL 
UNION ALL SELECT 9, 370 FROM DUAL 
UNION ALL SELECT 9, 134 FROM DUAL 
UNION ALL SELECT 9, 409 FROM DUAL 
UNION ALL SELECT 9, 373 FROM DUAL 
UNION ALL SELECT 9, 674 FROM DUAL 
UNION ALL SELECT 9, 849 FROM DUAL 
UNION ALL SELECT 9, 568 FROM DUAL 
UNION ALL SELECT 9, 48 FROM DUAL 

UNION ALL SELECT 10, 838 FROM DUAL 
UNION ALL SELECT 10, 334 FROM DUAL 
UNION ALL SELECT 10, 549 FROM DUAL 
UNION ALL SELECT 10, 468 FROM DUAL 
UNION ALL SELECT 10, 553 FROM DUAL 
UNION ALL SELECT 10, 41 FROM DUAL 
UNION ALL SELECT 10, 54 FROM DUAL 
UNION ALL SELECT 10, 859 FROM DUAL 
UNION ALL SELECT 10, 672 FROM DUAL 
UNION ALL SELECT 10, 870 FROM DUAL 
UNION ALL SELECT 10, 430 FROM DUAL 
UNION ALL SELECT 10, 2 FROM DUAL 
UNION ALL SELECT 10, 565 FROM DUAL 
UNION ALL SELECT 10, 498 FROM DUAL 
UNION ALL SELECT 10, 305 FROM DUAL 
UNION ALL SELECT 10, 363 FROM DUAL 
UNION ALL SELECT 10, 415 FROM DUAL 
UNION ALL SELECT 10, 178 FROM DUAL 
UNION ALL SELECT 10, 109 FROM DUAL 
UNION ALL SELECT 10, 863 FROM DUAL 
UNION ALL SELECT 10, 997 FROM DUAL 
UNION ALL SELECT 10, 796 FROM DUAL 
UNION ALL SELECT 10, 536 FROM DUAL 
UNION ALL SELECT 10, 960 FROM DUAL 
UNION ALL SELECT 10, 241 FROM DUAL 
UNION ALL SELECT 10, 11 FROM DUAL 
UNION ALL SELECT 10, 620 FROM DUAL 
UNION ALL SELECT 10, 872 FROM DUAL 
UNION ALL SELECT 10, 788 FROM DUAL 
UNION ALL SELECT 10, 953 FROM DUAL 
UNION ALL SELECT 10, 386 FROM DUAL 

UNION ALL SELECT 11, 824 FROM DUAL 
UNION ALL SELECT 11, 620 FROM DUAL 
UNION ALL SELECT 11, 195 FROM DUAL 
UNION ALL SELECT 11, 343 FROM DUAL 
UNION ALL SELECT 11, 853 FROM DUAL 
UNION ALL SELECT 11, 689 FROM DUAL 
UNION ALL SELECT 11, 850 FROM DUAL 
UNION ALL SELECT 11, 226 FROM DUAL 
UNION ALL SELECT 11, 10 FROM DUAL 
UNION ALL SELECT 11, 800 FROM DUAL 
UNION ALL SELECT 11, 6 FROM DUAL 
UNION ALL SELECT 11, 940 FROM DUAL 
UNION ALL SELECT 11, 385 FROM DUAL 
UNION ALL SELECT 11, 472 FROM DUAL 
UNION ALL SELECT 11, 977 FROM DUAL 
UNION ALL SELECT 11, 239 FROM DUAL 
UNION ALL SELECT 11, 652 FROM DUAL 
UNION ALL SELECT 11, 495 FROM DUAL 
UNION ALL SELECT 11, 709 FROM DUAL 
UNION ALL SELECT 11, 919 FROM DUAL 
UNION ALL SELECT 11, 421 FROM DUAL 
UNION ALL SELECT 11, 69 FROM DUAL 
UNION ALL SELECT 11, 794 FROM DUAL 
UNION ALL SELECT 11, 966 FROM DUAL 
UNION ALL SELECT 11, 506 FROM DUAL 
UNION ALL SELECT 11, 165 FROM DUAL 
UNION ALL SELECT 11, 190 FROM DUAL 
UNION ALL SELECT 11, 82 FROM DUAL 
UNION ALL SELECT 11, 68 FROM DUAL 
UNION ALL SELECT 11, 524 FROM DUAL 

UNION ALL SELECT 12, 574 FROM DUAL 
UNION ALL SELECT 12, 451 FROM DUAL 
UNION ALL SELECT 12, 716 FROM DUAL 
UNION ALL SELECT 12, 307 FROM DUAL 
UNION ALL SELECT 12, 729 FROM DUAL 
UNION ALL SELECT 12, 607 FROM DUAL 
UNION ALL SELECT 12, 392 FROM DUAL 
UNION ALL SELECT 12, 260 FROM DUAL 
UNION ALL SELECT 12, 565 FROM DUAL 
UNION ALL SELECT 12, 652 FROM DUAL 
UNION ALL SELECT 12, 830 FROM DUAL 
UNION ALL SELECT 12, 95 FROM DUAL 
UNION ALL SELECT 12, 97 FROM DUAL 
UNION ALL SELECT 12, 150 FROM DUAL 
UNION ALL SELECT 12, 656 FROM DUAL 
UNION ALL SELECT 12, 364 FROM DUAL 
UNION ALL SELECT 12, 309 FROM DUAL 
UNION ALL SELECT 12, 866 FROM DUAL 
UNION ALL SELECT 12, 5 FROM DUAL 
UNION ALL SELECT 12, 694 FROM DUAL 
UNION ALL SELECT 12, 755 FROM DUAL 
UNION ALL SELECT 12, 724 FROM DUAL 
UNION ALL SELECT 12, 242 FROM DUAL 
UNION ALL SELECT 12, 618 FROM DUAL 
UNION ALL SELECT 12, 52 FROM DUAL 
UNION ALL SELECT 12, 328 FROM DUAL 
UNION ALL SELECT 12, 583 FROM DUAL 
UNION ALL SELECT 12, 232 FROM DUAL 
UNION ALL SELECT 12, 623 FROM DUAL 
UNION ALL SELECT 12, 736 FROM DUAL 
UNION ALL SELECT 12, 49 FROM DUAL 
UNION ALL SELECT 12, 627 FROM DUAL 

UNION ALL SELECT 13, 642 FROM DUAL 
UNION ALL SELECT 13, 218 FROM DUAL 
UNION ALL SELECT 13, 823 FROM DUAL 
UNION ALL SELECT 13, 867 FROM DUAL 
UNION ALL SELECT 13, 8 FROM DUAL 
UNION ALL SELECT 13, 636 FROM DUAL 
UNION ALL SELECT 13, 888 FROM DUAL 
UNION ALL SELECT 13, 958 FROM DUAL 
UNION ALL SELECT 13, 538 FROM DUAL 
UNION ALL SELECT 13, 411 FROM DUAL 
UNION ALL SELECT 13, 870 FROM DUAL 
UNION ALL SELECT 13, 903 FROM DUAL 
UNION ALL SELECT 13, 159 FROM DUAL 
UNION ALL SELECT 13, 748 FROM DUAL 
UNION ALL SELECT 13, 595 FROM DUAL 
UNION ALL SELECT 13, 529 FROM DUAL 
UNION ALL SELECT 13, 47 FROM DUAL 
UNION ALL SELECT 13, 769 FROM DUAL 
UNION ALL SELECT 13, 939 FROM DUAL 
UNION ALL SELECT 13, 517 FROM DUAL 
UNION ALL SELECT 13, 290 FROM DUAL 
UNION ALL SELECT 13, 861 FROM DUAL 
UNION ALL SELECT 13, 702 FROM DUAL 
UNION ALL SELECT 13, 23 FROM DUAL 
UNION ALL SELECT 13, 554 FROM DUAL 
UNION ALL SELECT 13, 469 FROM DUAL 
UNION ALL SELECT 13, 257 FROM DUAL 
UNION ALL SELECT 13, 14 FROM DUAL 

UNION ALL SELECT 14, 914 FROM DUAL 
UNION ALL SELECT 14, 117 FROM DUAL 
UNION ALL SELECT 14, 368 FROM DUAL 
UNION ALL SELECT 14, 251 FROM DUAL 
UNION ALL SELECT 14, 348 FROM DUAL 
UNION ALL SELECT 14, 669 FROM DUAL 
UNION ALL SELECT 14, 33 FROM DUAL 
UNION ALL SELECT 14, 599 FROM DUAL 
UNION ALL SELECT 14, 183 FROM DUAL 
UNION ALL SELECT 14, 527 FROM DUAL 
UNION ALL SELECT 14, 252 FROM DUAL 
UNION ALL SELECT 14, 383 FROM DUAL 
UNION ALL SELECT 14, 131 FROM DUAL 
UNION ALL SELECT 14, 674 FROM DUAL 
UNION ALL SELECT 14, 583 FROM DUAL 
UNION ALL SELECT 14, 837 FROM DUAL 
UNION ALL SELECT 14, 270 FROM DUAL 
UNION ALL SELECT 14, 972 FROM DUAL 
UNION ALL SELECT 14, 618 FROM DUAL 
UNION ALL SELECT 14, 398 FROM DUAL 
UNION ALL SELECT 14, 973 FROM DUAL 
UNION ALL SELECT 14, 817 FROM DUAL 
UNION ALL SELECT 14, 642 FROM DUAL 
UNION ALL SELECT 14, 216 FROM DUAL 
UNION ALL SELECT 14, 648 FROM DUAL 
UNION ALL SELECT 14, 531 FROM DUAL 
UNION ALL SELECT 14, 62 FROM DUAL 
UNION ALL SELECT 14, 602 FROM DUAL 
UNION ALL SELECT 14, 258 FROM DUAL 
UNION ALL SELECT 14, 834 FROM DUAL 
UNION ALL SELECT 14, 753 FROM DUAL 
UNION ALL SELECT 14, 793 FROM DUAL 
UNION ALL SELECT 14, 847 FROM DUAL 
UNION ALL SELECT 14, 424 FROM DUAL 
UNION ALL SELECT 14, 403 FROM DUAL 

UNION ALL SELECT 15, 576 FROM DUAL 
UNION ALL SELECT 15, 682 FROM DUAL 
UNION ALL SELECT 15, 888 FROM DUAL 
UNION ALL SELECT 15, 372 FROM DUAL 
UNION ALL SELECT 15, 675 FROM DUAL 
UNION ALL SELECT 15, 101 FROM DUAL 
UNION ALL SELECT 15, 640 FROM DUAL 
UNION ALL SELECT 15, 998 FROM DUAL 
UNION ALL SELECT 15, 950 FROM DUAL 
UNION ALL SELECT 15, 260 FROM DUAL 
UNION ALL SELECT 15, 971 FROM DUAL 
UNION ALL SELECT 15, 93 FROM DUAL 
UNION ALL SELECT 15, 628 FROM DUAL 
UNION ALL SELECT 15, 995 FROM DUAL 
UNION ALL SELECT 15, 847 FROM DUAL 
UNION ALL SELECT 15, 199 FROM DUAL 
UNION ALL SELECT 15, 105 FROM DUAL 
UNION ALL SELECT 15, 547 FROM DUAL 
UNION ALL SELECT 15, 68 FROM DUAL 
UNION ALL SELECT 15, 747 FROM DUAL 
UNION ALL SELECT 15, 116 FROM DUAL 
UNION ALL SELECT 15, 724 FROM DUAL 
UNION ALL SELECT 15, 284 FROM DUAL 
UNION ALL SELECT 15, 200 FROM DUAL 
UNION ALL SELECT 15, 655 FROM DUAL 
UNION ALL SELECT 15, 7 FROM DUAL 
UNION ALL SELECT 15, 807 FROM DUAL 
UNION ALL SELECT 15, 12 FROM DUAL 
UNION ALL SELECT 15, 763 FROM DUAL 
UNION ALL SELECT 15, 62 FROM DUAL 
UNION ALL SELECT 15, 245 FROM DUAL 
UNION ALL SELECT 15, 786 FROM DUAL 
UNION ALL SELECT 15, 394 FROM DUAL 
UNION ALL SELECT 15, 890 FROM DUAL 
UNION ALL SELECT 15, 122 FROM DUAL 
UNION ALL SELECT 15, 435 FROM DUAL 
UNION ALL SELECT 15, 926 FROM DUAL 
UNION ALL SELECT 15, 257 FROM DUAL 

UNION ALL SELECT 16, 877 FROM DUAL 
UNION ALL SELECT 16, 544 FROM DUAL 
UNION ALL SELECT 16, 600 FROM DUAL 
UNION ALL SELECT 16, 941 FROM DUAL 
UNION ALL SELECT 16, 518 FROM DUAL 
UNION ALL SELECT 16, 905 FROM DUAL 
UNION ALL SELECT 16, 331 FROM DUAL 
UNION ALL SELECT 16, 463 FROM DUAL 
UNION ALL SELECT 16, 853 FROM DUAL 
UNION ALL SELECT 16, 818 FROM DUAL 
UNION ALL SELECT 16, 195 FROM DUAL 
UNION ALL SELECT 16, 865 FROM DUAL 
UNION ALL SELECT 16, 975 FROM DUAL 
UNION ALL SELECT 16, 278 FROM DUAL 
UNION ALL SELECT 16, 36 FROM DUAL 
UNION ALL SELECT 16, 554 FROM DUAL 
UNION ALL SELECT 16, 798 FROM DUAL 
UNION ALL SELECT 16, 204 FROM DUAL 
UNION ALL SELECT 16, 23 FROM DUAL 
UNION ALL SELECT 16, 129 FROM DUAL 
UNION ALL SELECT 16, 707 FROM DUAL 
UNION ALL SELECT 16, 383 FROM DUAL 
UNION ALL SELECT 16, 164 FROM DUAL 
UNION ALL SELECT 16, 432 FROM DUAL 
UNION ALL SELECT 16, 981 FROM DUAL 
UNION ALL SELECT 16, 582 FROM DUAL 
UNION ALL SELECT 16, 269 FROM DUAL 
UNION ALL SELECT 16, 761 FROM DUAL 
UNION ALL SELECT 16, 175 FROM DUAL 
UNION ALL SELECT 16, 541 FROM DUAL 
UNION ALL SELECT 16, 31 FROM DUAL 
UNION ALL SELECT 16, 288 FROM DUAL 
UNION ALL SELECT 16, 522 FROM DUAL 
UNION ALL SELECT 16, 263 FROM DUAL 
UNION ALL SELECT 16, 208 FROM DUAL 
UNION ALL SELECT 16, 948 FROM DUAL 
UNION ALL SELECT 16, 369 FROM DUAL 

UNION ALL SELECT 17, 208 FROM DUAL 
UNION ALL SELECT 17, 735 FROM DUAL 
UNION ALL SELECT 17, 859 FROM DUAL 
UNION ALL SELECT 17, 412 FROM DUAL 
UNION ALL SELECT 17, 872 FROM DUAL 
UNION ALL SELECT 17, 891 FROM DUAL 
UNION ALL SELECT 17, 693 FROM DUAL 
UNION ALL SELECT 17, 650 FROM DUAL 
UNION ALL SELECT 17, 948 FROM DUAL 
UNION ALL SELECT 17, 361 FROM DUAL 
UNION ALL SELECT 17, 945 FROM DUAL 
UNION ALL SELECT 17, 777 FROM DUAL 
UNION ALL SELECT 17, 346 FROM DUAL 
UNION ALL SELECT 17, 665 FROM DUAL 
UNION ALL SELECT 17, 843 FROM DUAL 
UNION ALL SELECT 17, 842 FROM DUAL 
UNION ALL SELECT 17, 837 FROM DUAL 
UNION ALL SELECT 17, 156 FROM DUAL 
UNION ALL SELECT 17, 727 FROM DUAL 
UNION ALL SELECT 17, 672 FROM DUAL 
UNION ALL SELECT 17, 308 FROM DUAL 
UNION ALL SELECT 17, 814 FROM DUAL 
UNION ALL SELECT 17, 987 FROM DUAL 
UNION ALL SELECT 17, 403 FROM DUAL 
UNION ALL SELECT 17, 696 FROM DUAL 
UNION ALL SELECT 17, 413 FROM DUAL 
UNION ALL SELECT 17, 600 FROM DUAL 
UNION ALL SELECT 17, 259 FROM DUAL 
UNION ALL SELECT 17, 583 FROM DUAL 
UNION ALL SELECT 17, 977 FROM DUAL 
UNION ALL SELECT 17, 587 FROM DUAL 
UNION ALL SELECT 17, 184 FROM DUAL 
UNION ALL SELECT 17, 329 FROM DUAL 
UNION ALL SELECT 17, 170 FROM DUAL 
UNION ALL SELECT 17, 381 FROM DUAL 
UNION ALL SELECT 17, 957 FROM DUAL 
UNION ALL SELECT 17, 867 FROM DUAL 
UNION ALL SELECT 17, 67 FROM DUAL 
UNION ALL SELECT 17, 808 FROM DUAL 
UNION ALL SELECT 17, 597 FROM DUAL 
UNION ALL SELECT 17, 14 FROM DUAL 
UNION ALL SELECT 17, 161 FROM DUAL 
UNION ALL SELECT 17, 200 FROM DUAL 
UNION ALL SELECT 17, 734 FROM DUAL 
UNION ALL SELECT 17, 841 FROM DUAL 
UNION ALL SELECT 17, 290 FROM DUAL 
UNION ALL SELECT 17, 150 FROM DUAL 
UNION ALL SELECT 17, 373 FROM DUAL 

UNION ALL SELECT 18, 969 FROM DUAL 
UNION ALL SELECT 18, 848 FROM DUAL 
UNION ALL SELECT 18, 258 FROM DUAL 
UNION ALL SELECT 18, 598 FROM DUAL 
UNION ALL SELECT 18, 991 FROM DUAL 
UNION ALL SELECT 18, 8 FROM DUAL 
UNION ALL SELECT 18, 297 FROM DUAL 
UNION ALL SELECT 18, 300 FROM DUAL 
UNION ALL SELECT 18, 599 FROM DUAL 
UNION ALL SELECT 18, 217 FROM DUAL 
UNION ALL SELECT 18, 638 FROM DUAL 
UNION ALL SELECT 18, 981 FROM DUAL 
UNION ALL SELECT 18, 976 FROM DUAL 
UNION ALL SELECT 18, 320 FROM DUAL 
UNION ALL SELECT 18, 601 FROM DUAL 
UNION ALL SELECT 18, 417 FROM DUAL 
UNION ALL SELECT 18, 648 FROM DUAL 
UNION ALL SELECT 18, 525 FROM DUAL 
UNION ALL SELECT 18, 924 FROM DUAL 
UNION ALL SELECT 18, 966 FROM DUAL 
UNION ALL SELECT 18, 206 FROM DUAL 
UNION ALL SELECT 18, 360 FROM DUAL 
UNION ALL SELECT 18, 465 FROM DUAL 
UNION ALL SELECT 18, 372 FROM DUAL 
UNION ALL SELECT 18, 610 FROM DUAL 
UNION ALL SELECT 18, 792 FROM DUAL 
UNION ALL SELECT 18, 606 FROM DUAL 
UNION ALL SELECT 18, 858 FROM DUAL 
UNION ALL SELECT 18, 123 FROM DUAL 
UNION ALL SELECT 18, 179 FROM DUAL 
UNION ALL SELECT 18, 577 FROM DUAL 
UNION ALL SELECT 18, 349 FROM DUAL 
UNION ALL SELECT 18, 449 FROM DUAL 
UNION ALL SELECT 18, 428 FROM DUAL 
UNION ALL SELECT 18, 574 FROM DUAL 
UNION ALL SELECT 18, 59 FROM DUAL 
UNION ALL SELECT 18, 869 FROM DUAL 
UNION ALL SELECT 18, 902 FROM DUAL 
UNION ALL SELECT 18, 307 FROM DUAL 
UNION ALL SELECT 18, 999 FROM DUAL 
UNION ALL SELECT 18, 215 FROM DUAL 
UNION ALL SELECT 18, 242 FROM DUAL 
UNION ALL SELECT 18, 497 FROM DUAL 

UNION ALL SELECT 19, 662 FROM DUAL 
UNION ALL SELECT 19, 128 FROM DUAL 
UNION ALL SELECT 19, 38 FROM DUAL 
UNION ALL SELECT 19, 771 FROM DUAL 
UNION ALL SELECT 19, 49 FROM DUAL 
UNION ALL SELECT 19, 596 FROM DUAL 
UNION ALL SELECT 19, 477 FROM DUAL 
UNION ALL SELECT 19, 449 FROM DUAL 
UNION ALL SELECT 19, 869 FROM DUAL 
UNION ALL SELECT 19, 610 FROM DUAL 
UNION ALL SELECT 19, 562 FROM DUAL 
UNION ALL SELECT 19, 240 FROM DUAL 
UNION ALL SELECT 19, 863 FROM DUAL 
UNION ALL SELECT 19, 953 FROM DUAL 
UNION ALL SELECT 19, 54 FROM DUAL 
UNION ALL SELECT 19, 15 FROM DUAL 
UNION ALL SELECT 19, 198 FROM DUAL 
UNION ALL SELECT 19, 875 FROM DUAL 
UNION ALL SELECT 19, 153 FROM DUAL 
UNION ALL SELECT 19, 822 FROM DUAL 
UNION ALL SELECT 19, 210 FROM DUAL 
UNION ALL SELECT 19, 22 FROM DUAL 
UNION ALL SELECT 19, 686 FROM DUAL 
UNION ALL SELECT 19, 490 FROM DUAL 
UNION ALL SELECT 19, 497 FROM DUAL 
UNION ALL SELECT 19, 809 FROM DUAL 
UNION ALL SELECT 19, 144 FROM DUAL 
UNION ALL SELECT 19, 927 FROM DUAL 
UNION ALL SELECT 19, 659 FROM DUAL 
UNION ALL SELECT 19, 512 FROM DUAL 
UNION ALL SELECT 19, 514 FROM DUAL 
UNION ALL SELECT 19, 886 FROM DUAL 
UNION ALL SELECT 19, 993 FROM DUAL 
UNION ALL SELECT 19, 184 FROM DUAL 
UNION ALL SELECT 19, 118 FROM DUAL 
UNION ALL SELECT 19, 577 FROM DUAL 
UNION ALL SELECT 19, 91 FROM DUAL 
UNION ALL SELECT 19, 170 FROM DUAL 
UNION ALL SELECT 19, 136 FROM DUAL 
UNION ALL SELECT 19, 637 FROM DUAL 
UNION ALL SELECT 19, 821 FROM DUAL 
UNION ALL SELECT 19, 167 FROM DUAL 
UNION ALL SELECT 19, 919 FROM DUAL 

UNION ALL SELECT 20, 187 FROM DUAL 
UNION ALL SELECT 20, 47 FROM DUAL 
UNION ALL SELECT 20, 276 FROM DUAL 
UNION ALL SELECT 20, 221 FROM DUAL 
UNION ALL SELECT 20, 316 FROM DUAL 
UNION ALL SELECT 20, 292 FROM DUAL 
UNION ALL SELECT 20, 383 FROM DUAL 
UNION ALL SELECT 20, 894 FROM DUAL 
UNION ALL SELECT 20, 165 FROM DUAL 
UNION ALL SELECT 20, 49 FROM DUAL 
UNION ALL SELECT 20, 149 FROM DUAL 
UNION ALL SELECT 20, 288 FROM DUAL 
UNION ALL SELECT 20, 307 FROM DUAL 
UNION ALL SELECT 20, 177 FROM DUAL 
UNION ALL SELECT 20, 674 FROM DUAL 
UNION ALL SELECT 20, 697 FROM DUAL 
UNION ALL SELECT 20, 835 FROM DUAL 
UNION ALL SELECT 20, 962 FROM DUAL 
UNION ALL SELECT 20, 325 FROM DUAL 
UNION ALL SELECT 20, 502 FROM DUAL 
UNION ALL SELECT 20, 244 FROM DUAL 
UNION ALL SELECT 20, 523 FROM DUAL 
UNION ALL SELECT 20, 494 FROM DUAL 
UNION ALL SELECT 20, 377 FROM DUAL 
UNION ALL SELECT 20, 695 FROM DUAL 
UNION ALL SELECT 20, 876 FROM DUAL 
UNION ALL SELECT 20, 896 FROM DUAL 
UNION ALL SELECT 20, 482 FROM DUAL 
UNION ALL SELECT 20, 368 FROM DUAL 
UNION ALL SELECT 20, 872 FROM DUAL 
UNION ALL SELECT 20, 540 FROM DUAL 
UNION ALL SELECT 20, 175 FROM DUAL 
UNION ALL SELECT 20, 211 FROM DUAL 
UNION ALL SELECT 20, 104 FROM DUAL 
UNION ALL SELECT 20, 758 FROM DUAL 
UNION ALL SELECT 20, 16 FROM DUAL 
UNION ALL SELECT 20, 854 FROM DUAL 
UNION ALL SELECT 20, 3 FROM DUAL 
UNION ALL SELECT 20, 629 FROM DUAL 
UNION ALL SELECT 20, 850 FROM DUAL 
UNION ALL SELECT 20, 310 FROM DUAL 
UNION ALL SELECT 20, 721 FROM DUAL 
UNION ALL SELECT 20, 701 FROM DUAL 
UNION ALL SELECT 20, 761 FROM DUAL 
UNION ALL SELECT 20, 145 FROM DUAL 
UNION ALL SELECT 20, 639 FROM DUAL 
UNION ALL SELECT 20, 404 FROM DUAL 
UNION ALL SELECT 20, 838 FROM DUAL 
UNION ALL SELECT 20, 204 FROM DUAL 

UNION ALL SELECT 21, 584 FROM DUAL 
UNION ALL SELECT 21, 31 FROM DUAL 
UNION ALL SELECT 21, 132 FROM DUAL 
UNION ALL SELECT 21, 474 FROM DUAL 
UNION ALL SELECT 21, 797 FROM DUAL 
UNION ALL SELECT 21, 72 FROM DUAL 
UNION ALL SELECT 21, 966 FROM DUAL 
UNION ALL SELECT 21, 16 FROM DUAL 
UNION ALL SELECT 21, 700 FROM DUAL 
UNION ALL SELECT 21, 481 FROM DUAL 
UNION ALL SELECT 21, 243 FROM DUAL 
UNION ALL SELECT 21, 750 FROM DUAL 
UNION ALL SELECT 21, 470 FROM DUAL 
UNION ALL SELECT 21, 11 FROM DUAL 
UNION ALL SELECT 21, 115 FROM DUAL 
UNION ALL SELECT 21, 153 FROM DUAL 
UNION ALL SELECT 21, 136 FROM DUAL 
UNION ALL SELECT 21, 691 FROM DUAL 
UNION ALL SELECT 21, 237 FROM DUAL 
UNION ALL SELECT 21, 441 FROM DUAL 
UNION ALL SELECT 21, 709 FROM DUAL 
UNION ALL SELECT 21, 62 FROM DUAL 
UNION ALL SELECT 21, 89 FROM DUAL 
UNION ALL SELECT 21, 293 FROM DUAL 
UNION ALL SELECT 21, 144 FROM DUAL 
UNION ALL SELECT 21, 634 FROM DUAL 
UNION ALL SELECT 21, 1000 FROM DUAL 
UNION ALL SELECT 21, 318 FROM DUAL 
UNION ALL SELECT 21, 757 FROM DUAL 
UNION ALL SELECT 21, 605 FROM DUAL 
UNION ALL SELECT 21, 412 FROM DUAL 
UNION ALL SELECT 21, 430 FROM DUAL 
UNION ALL SELECT 21, 22 FROM DUAL 
UNION ALL SELECT 21, 419 FROM DUAL 
UNION ALL SELECT 21, 754 FROM DUAL 
UNION ALL SELECT 21, 581 FROM DUAL 
UNION ALL SELECT 21, 963 FROM DUAL 
UNION ALL SELECT 21, 617 FROM DUAL 
UNION ALL SELECT 21, 319 FROM DUAL 
UNION ALL SELECT 21, 781 FROM DUAL 
UNION ALL SELECT 21, 991 FROM DUAL 
UNION ALL SELECT 21, 716 FROM DUAL 
UNION ALL SELECT 21, 258 FROM DUAL 
UNION ALL SELECT 21, 782 FROM DUAL 

UNION ALL SELECT 22, 584 FROM DUAL 
UNION ALL SELECT 22, 31 FROM DUAL 
UNION ALL SELECT 22, 132 FROM DUAL 
UNION ALL SELECT 22, 474 FROM DUAL 
UNION ALL SELECT 22, 797 FROM DUAL 
UNION ALL SELECT 22, 72 FROM DUAL 
UNION ALL SELECT 22, 966 FROM DUAL 
UNION ALL SELECT 22, 16 FROM DUAL 
UNION ALL SELECT 22, 700 FROM DUAL 
UNION ALL SELECT 22, 481 FROM DUAL 
UNION ALL SELECT 22, 243 FROM DUAL 
UNION ALL SELECT 22, 750 FROM DUAL 
UNION ALL SELECT 22, 470 FROM DUAL 
UNION ALL SELECT 22, 11 FROM DUAL 
UNION ALL SELECT 22, 115 FROM DUAL 
UNION ALL SELECT 22, 153 FROM DUAL 
UNION ALL SELECT 22, 136 FROM DUAL 
UNION ALL SELECT 22, 691 FROM DUAL 
UNION ALL SELECT 22, 237 FROM DUAL 
UNION ALL SELECT 22, 441 FROM DUAL 
UNION ALL SELECT 22, 709 FROM DUAL 
UNION ALL SELECT 22, 62 FROM DUAL 
UNION ALL SELECT 22, 89 FROM DUAL 
UNION ALL SELECT 22, 293 FROM DUAL 
UNION ALL SELECT 22, 144 FROM DUAL 
UNION ALL SELECT 22, 634 FROM DUAL 
UNION ALL SELECT 22, 1000 FROM DUAL 
UNION ALL SELECT 22, 318 FROM DUAL 
UNION ALL SELECT 22, 757 FROM DUAL 
UNION ALL SELECT 22, 605 FROM DUAL 
UNION ALL SELECT 22, 412 FROM DUAL 
UNION ALL SELECT 22, 430 FROM DUAL 
UNION ALL SELECT 22, 22 FROM DUAL 
UNION ALL SELECT 22, 419 FROM DUAL 
UNION ALL SELECT 22, 754 FROM DUAL 
UNION ALL SELECT 22, 581 FROM DUAL 
UNION ALL SELECT 22, 963 FROM DUAL 
UNION ALL SELECT 22, 617 FROM DUAL 
UNION ALL SELECT 22, 319 FROM DUAL 
UNION ALL SELECT 22, 781 FROM DUAL 
UNION ALL SELECT 22, 991 FROM DUAL 
UNION ALL SELECT 22, 716 FROM DUAL 
UNION ALL SELECT 22, 258 FROM DUAL 
UNION ALL SELECT 22, 782 FROM DUAL 
),
hash_mapping AS (
    SELECT 5 AS hash_value, 0 AS test_number FROM DUAL
    UNION ALL SELECT 18, 1 FROM DUAL
    UNION ALL SELECT 27, 2 FROM DUAL
    UNION ALL SELECT 29, 3 FROM DUAL
    UNION ALL SELECT 36, 4 FROM DUAL
    UNION ALL SELECT 40, 5 FROM DUAL
    UNION ALL SELECT 44, 6 FROM DUAL
    UNION ALL SELECT 49, 7 FROM DUAL
    UNION ALL SELECT 51, 8 FROM DUAL
    UNION ALL SELECT 54, 9 FROM DUAL
    UNION ALL SELECT 55, 10 FROM DUAL
    UNION ALL SELECT 59, 11 FROM DUAL
    UNION ALL SELECT 61, 12 FROM DUAL
    UNION ALL SELECT 69, 13 FROM DUAL
    UNION ALL SELECT 73, 14 FROM DUAL
    UNION ALL SELECT 78, 15 FROM DUAL
    UNION ALL SELECT 80, 16 FROM DUAL
    UNION ALL SELECT 85, 17 FROM DUAL
    UNION ALL SELECT 87, 18 FROM DUAL
    UNION ALL SELECT 95, 19 FROM DUAL
    UNION ALL SELECT 99, 20 FROM DUAL
    UNION ALL SELECT 100, 21 FROM DUAL
),
mapped_test_number AS (
    SELECT hm.test_number
    FROM hash_mapping hm
    WHERE hm.hash_value = (SELECT COUNT(*) FROM Products)
)
SELECT lt.product_id
FROM literal_table lt
JOIN mapped_test_number mtn ON lt.test_number = mtn.test_number;
