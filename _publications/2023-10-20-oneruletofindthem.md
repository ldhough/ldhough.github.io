---
title: "OneRuleToFindThem: Efficient Automated Generation of Password Cracking Rules"
collection: publications
category: manuscripts
permalink: /publication/2023-10-20-oneruletofindthem
excerpt: 'Generating hashcat rules for efficient password cracking. Awarded best research paper at CCSC Eastern.'
date: "October 2023"
venue: 'The Journal of Computing Sciences in Colleges'
#slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://www.ccsc.org/publications/journals/EA2023.pdf'
citation: "J. Eckroth, L. Hough, H. ElAarag. OneRuleToFindThem: Efficient Automated Generation of Password Cracking Rules. CCSC Eastern 2023."
---

Password cracking tools such as Hashcat support the use of rules
that transform a dictionary of words, such as common English words
and previously-cracked passwords, into new candidate guesses for hashed
passwords. Rules are necessary to achieve high cracking ratios, but they
are difficult and time-consuming to build by hand. We have developed an
algorithm and implementation that automatically finds successful rules
via the combinatorial generation of rules and empirical observation of
how often each generated rule transforms a dictionary word to a target
password.
Our algorithm includes numerous performance and logical optimiza-
tions to avoid the numerous pitfalls that would occur if a naïve brute-
force technique were used. In this paper, we explain our algorithm in
detail and experimentally compare the performance of its outputs to
existing rule sets constructed via various approaches ranging from fully-
manual to fully-automated like our own.
We show that our approach achieves comparable cracking perfor-
mance to other top rule sets while also generating rules that do not exist
in other rule sets. This makes cracking attempts using our rules mostly
complementary to cracking attempts with other rule sets. We demon-
strate that we can achieve top performance by combining our generated
rules with other rule sets.
