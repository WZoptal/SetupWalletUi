--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0 (Debian 15.0-1.pgdg110+1)
-- Dumped by pg_dump version 15.0 (Debian 15.0-1.pgdg110+1)

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
-- Name: contact_list; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contact_list (
    id bigint NOT NULL,
    contacts character varying(255),
    owner_id character varying(255),
    unapproved_contacts character varying(255)
);


ALTER TABLE public.contact_list OWNER TO postgres;

--
-- Name: contactlistequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contactlistequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contactlistequence OWNER TO postgres;

--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id uuid NOT NULL,
    email character varying(255) DEFAULT ''::character varying,
    firstname character varying(255) DEFAULT ''::character varying,
    handle character varying(255) DEFAULT ''::character varying,
    lastname character varying(255) DEFAULT ''::character varying,
    smpl_wallet_address character varying(255) DEFAULT ''::character varying
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Data for Name: contact_list; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contact_list (id, contacts, owner_id, unapproved_contacts) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, email, firstname, handle, lastname, smpl_wallet_address) FROM stdin;
8e138609-75af-4517-aff5-bc8952c00cdb			jerry		12346
8e138609-75af-4517-aff5-bc8952c00cdc			stephenfitzpatrick		12347
8e138609-75af-4517-aff5-bc8952c00cde			audunlaading		12348
8e138609-75af-4517-aff5-bc8952c00cdf			blackjack		12342
8e138609-75af-4517-aff5-bc8952c00cbe			geddylee		02112
8e138609-75af-4517-aff5-bc8952c00cdd			bob1		smpl1q28v96p6lhyac2ghjlyylsl4290tl722x9kmtg
\.


--
-- Name: contactlistequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contactlistequence', 1, false);


--
-- Name: contact_list contact_list_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact_list
    ADD CONSTRAINT contact_list_pkey PRIMARY KEY (id);


--
-- Name: user uk_1s39tt17bftcbfyr9uddprcd2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT uk_1s39tt17bftcbfyr9uddprcd2 UNIQUE (smpl_wallet_address);


--
-- Name: user uk_fxkpynjcnok35ou0y1g3jxe7y; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT uk_fxkpynjcnok35ou0y1g3jxe7y UNIQUE (handle);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

