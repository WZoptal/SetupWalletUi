--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2 (Debian 14.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: databasechangelog; Type: TABLE; Schema: public; Owner: vault-chain-wallets
--

CREATE TABLE public.databasechangelog (
    id character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    filename character varying(255) NOT NULL,
    dateexecuted timestamp without time zone NOT NULL,
    orderexecuted integer NOT NULL,
    exectype character varying(10) NOT NULL,
    md5sum character varying(35),
    description character varying(255),
    comments character varying(255),
    tag character varying(255),
    liquibase character varying(20),
    contexts character varying(255),
    labels character varying(255),
    deployment_id character varying(10)
);


ALTER TABLE public.databasechangelog OWNER TO "vault-chain-wallets";

--
-- Name: databasechangeloglock; Type: TABLE; Schema: public; Owner: vault-chain-wallets
--

CREATE TABLE public.databasechangeloglock (
    id integer NOT NULL,
    locked boolean NOT NULL,
    lockgranted timestamp without time zone,
    lockedby character varying(255)
);


ALTER TABLE public.databasechangeloglock OWNER TO "vault-chain-wallets";

--
-- Name: wallet; Type: TABLE; Schema: public; Owner: vault-chain-wallets
--

CREATE TABLE public.wallet (
    id uuid NOT NULL,
    passphrase character varying(255),
    chain_prefix character varying(255)
);


ALTER TABLE public.wallet OWNER TO "vault-chain-wallets";

--
-- Name: wallet_mnemonic; Type: TABLE; Schema: public; Owner: vault-chain-wallets
--

CREATE TABLE public.wallet_mnemonic (
    wallet_mnemonic_id uuid DEFAULT gen_random_uuid() NOT NULL,
    wallet_id uuid NOT NULL,
    mnemonic character varying(255)
);


ALTER TABLE public.wallet_mnemonic OWNER TO "vault-chain-wallets";

--
-- Data for Name: databasechangelog; Type: TABLE DATA; Schema: public; Owner: vault-chain-wallets
--

COPY public.databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) FROM stdin;
1647464051462-1	Jacob	db/changelogs/20220316-01-changelog.xml	2022-08-01 21:53:39.91919	1	EXECUTED	8:31569c253ae93342a3e4922089e3519f	createTable tableName=wallet		\N	4.5.0	\N	\N	9390819774
1647464051462-2	Jacob	db/changelogs/20220316-01-changelog.xml	2022-08-01 21:53:39.931649	2	EXECUTED	8:55a05e49aa62a98a1c41478716852481	createTable tableName=wallet_mnemonic		\N	4.5.0	\N	\N	9390819774
1647464051462-3	Jacob	db/changelogs/20220316-01-changelog.xml	2022-08-01 21:53:39.940119	3	EXECUTED	8:6449c07ac4635561b3e6b29899bdad9c	addForeignKeyConstraint baseTableName=wallet_mnemonic, constraintName=fk_wallet_mnemonic_on_wallet, referencedTableName=wallet		\N	4.5.0	\N	\N	9390819774
\.


--
-- Data for Name: databasechangeloglock; Type: TABLE DATA; Schema: public; Owner: vault-chain-wallets
--

COPY public.databasechangeloglock (id, locked, lockgranted, lockedby) FROM stdin;
1	f	\N	\N
\.


--
-- Data for Name: wallet; Type: TABLE DATA; Schema: public; Owner: vault-chain-wallets
--

COPY public.wallet (id, passphrase, chain_prefix) FROM stdin;
1f4b031a-e728-4bab-9899-e678c9484568	90a61ed813c5176166941d33924155a0cc6a56ffddc691c7e4c3f9c4a33623f8f5a99d2f210e90e516909c57e1e6797f	smpl
\.


--
-- Data for Name: wallet_mnemonic; Type: TABLE DATA; Schema: public; Owner: vault-chain-wallets
--

COPY public.wallet_mnemonic (wallet_mnemonic_id, wallet_id, mnemonic) FROM stdin;
6f4e7e1a-9d1d-4a68-afa8-b4d9860b6108	1f4b031a-e728-4bab-9899-e678c9484568	a2001837ed13b8b8e276d85ba35ff2aa29c508586a53d792e8c5ea8ae4d4da7b
195920f4-33ef-43be-8713-a697c6a2e8a0	1f4b031a-e728-4bab-9899-e678c9484568	7b44c039dd1205a72c986d0bc16cbacdb36b0f962226e856d88ee8c1d27bc500
37ae3b36-e527-4123-a30d-1216f186083f	1f4b031a-e728-4bab-9899-e678c9484568	0b0ff94475260729b8834e10d6876590f7623f583493ba6b339fb602c2b77087
8ea93462-5c62-47d8-85bc-357b0cd470a7	1f4b031a-e728-4bab-9899-e678c9484568	daac8474ac29b9263822a7c4124b0a292a4405cac26d31603fbd03834f55b764
33c8ca12-fcd6-424d-ad26-3284fa6ac98a	1f4b031a-e728-4bab-9899-e678c9484568	21f8d8ef92292f6e09dd5f81e64358cca736050fb75002c09bf98f6c6c4b4c39
1d827f55-5f32-45a7-b0f5-89b2883b594d	1f4b031a-e728-4bab-9899-e678c9484568	5abff83dd85526e7e100eb689f0c2ba6a4171c46b506be869a4def485d5f7e72
7999cdfe-ad66-4f38-89b2-1b6427b84544	1f4b031a-e728-4bab-9899-e678c9484568	f6c0c74275677ca9dc7f2b882f3a17c54d7621acc0e31b92b7d998b1b3317e75
255950aa-70f5-40be-a8b4-f564f0d9f375	1f4b031a-e728-4bab-9899-e678c9484568	d4d62709ccc1a7851e11fe23983a6dc6fd0a81cbd7ddec0627aa91eb4a262c03
e1a1a39d-db59-4ce9-8a77-e298ec0d8371	1f4b031a-e728-4bab-9899-e678c9484568	edc012fbbd69f9a486a4fed5de161ffe1ef6d0a021534b1c50d3b23659d708c4
1da36eb7-f6b3-408e-a1b1-1ba7544de85d	1f4b031a-e728-4bab-9899-e678c9484568	4eeecf2fc9a61ed7b80a67f72b5670ade58403cfe2e0c1aacab31dcb9d652a81
8c0f5481-8284-4e39-b2ef-19168fba5854	1f4b031a-e728-4bab-9899-e678c9484568	82d48adfdced1e88967af6911e3ea5a85eeb82e3be51cc50217fe1c2eb66a425
124df57a-a130-4368-8359-85cf51825ad7	1f4b031a-e728-4bab-9899-e678c9484568	19f8789c4018f7fd15cbfcf3e6f7afdf4bcfe6614b0cdbe48f06ba33e9e7853a
6b6a00f6-e756-4f02-951c-62cfdcc01393	1f4b031a-e728-4bab-9899-e678c9484568	8d443a7c698b92ee42b5f3d83e04cc3e0e1241de014785249c8841e29813e322
4ab87a46-fd04-4173-ac20-f74083488dd3	1f4b031a-e728-4bab-9899-e678c9484568	8f52da867bbebfbd463fb16094fc4bcfe4e2278362126a7bebbdd6f44d68fb68
69453363-abdd-47f7-987e-c6671d98d72d	1f4b031a-e728-4bab-9899-e678c9484568	227a2c57d25d2824ae41b0a3f02f12e29241c09b0709a3b33d3c81aebb0edda0
4adb7f89-c5bb-40f0-bcc6-c0937ef712c5	1f4b031a-e728-4bab-9899-e678c9484568	954fdea57d73a87fafec60d781acabaeb26cceaf8ec7bb048967d8e5aaf6c909
c42d8bd2-ec34-4a5c-a6bf-ab3ff5a596a2	1f4b031a-e728-4bab-9899-e678c9484568	047c5086f21fa7887b50dbaf414719498ef75ee2b5a1e485af6570244f8e849e
d9ff208d-ae14-4998-9485-5880c0fcf70c	1f4b031a-e728-4bab-9899-e678c9484568	1437b93a8d3620231bca7ba46adc974e2acb0e679f1f4a650c444cb5cca2a4d5
b3e15b6c-d820-4bad-b35e-634b1cfff3df	1f4b031a-e728-4bab-9899-e678c9484568	f74f8051a718941935ce424f64855547024a57d478495632e05fe568b4e821ba
849ac041-0415-499d-ac1f-788b2412f484	1f4b031a-e728-4bab-9899-e678c9484568	4f925e00c630d8dbd4aa9f1258b5c68f04ca8e847abfefe9d89ac32113d51c5c
fe2224ac-b88d-440e-bb67-19bc6b150718	1f4b031a-e728-4bab-9899-e678c9484568	9ad85604123e142bde7ec5637ba805872ee344fa3443bc9986c80b423dda42e1
dbf1cc2b-91b4-49cc-a7dc-4aa6bc588cd2	1f4b031a-e728-4bab-9899-e678c9484568	db715126f4565a7cd71d97989a47b9fc1e105b75346e75d7dc0166e7b07fcd89
0720b064-170b-48cd-8078-88a1b49c3c61	1f4b031a-e728-4bab-9899-e678c9484568	909fa1cef2b37e3b94efb024d6a295d5a69712eaeb2d2f1b5769008a08a7f992
a9b5b5e6-b35d-45de-892a-53780e3c0117	1f4b031a-e728-4bab-9899-e678c9484568	01a429a9012d053d72d7b33bbe51887580c6fec8aafe0b618ca917d571335d65
\.


--
-- Name: databasechangeloglock databasechangeloglock_pkey; Type: CONSTRAINT; Schema: public; Owner: vault-chain-wallets
--

ALTER TABLE ONLY public.databasechangeloglock
    ADD CONSTRAINT databasechangeloglock_pkey PRIMARY KEY (id);


--
-- Name: wallet pk_wallet; Type: CONSTRAINT; Schema: public; Owner: vault-chain-wallets
--

ALTER TABLE ONLY public.wallet
    ADD CONSTRAINT pk_wallet PRIMARY KEY (id);


--
-- Name: wallet_mnemonic pk_wallet_mnemonic; Type: CONSTRAINT; Schema: public; Owner: vault-chain-wallets
--

ALTER TABLE ONLY public.wallet_mnemonic
    ADD CONSTRAINT pk_wallet_mnemonic PRIMARY KEY (wallet_mnemonic_id);


--
-- Name: wallet_mnemonic fk_wallet_mnemonic_on_wallet; Type: FK CONSTRAINT; Schema: public; Owner: vault-chain-wallets
--

ALTER TABLE ONLY public.wallet_mnemonic
    ADD CONSTRAINT fk_wallet_mnemonic_on_wallet FOREIGN KEY (wallet_id) REFERENCES public.wallet(id);


--
-- PostgreSQL database dump complete
--

