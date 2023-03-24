CREATE SCHEMA users;

CREATE TABLE IF NOT EXISTS users.person
(
    id_person integer NOT NULL DEFAULT nextval('users.person_id_person_seq'::regclass),
    nama text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    no_hp text COLLATE pg_catalog."default" NOT NULL,
    alamat text COLLATE pg_catalog."default",
    kd_sts_aktif character(1) COLLATE pg_catalog."default",
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT person_pk PRIMARY KEY (id_person)
);

CREATE TABLE IF NOT EXISTS users.peran
(
    id_peran integer NOT NULL DEFAULT nextval('users.peran_id_peran_seq'::regclass),
    nama_peran text COLLATE pg_catalog."default" NOT NULL,
    kd_sts_aktif character(1) COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT peran_pk PRIMARY KEY (id_peran)
);

CREATE TABLE IF NOT EXISTS users.peran_user
(
    id_peran_user integer NOT NULL DEFAULT nextval('users.peran_user_id_peran_user_seq'::regclass),
    id_person integer NOT NULL,
    id_peran integer NOT NULL,
    nama_user text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    kd_sts_aktif character(1) COLLATE pg_catalog."default" NOT NULL DEFAULT 1,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT peran_user_fk FOREIGN KEY (id_person)
        REFERENCES users.person (id_person) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT peran_user_fk_1 FOREIGN KEY (id_peran)
        REFERENCES users.peran (id_peran) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

 INSERT INTO users.peran_user VALUES(1, 1, 1, 'Admin', 123);

INSERT INTO users.peran VALUES(1, 'Admin', 1);
INSERT INTO users.person VALUES(1, 'Admin', '089', 1);



