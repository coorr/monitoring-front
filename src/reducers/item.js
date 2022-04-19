import produce from 'immer';

const initialState = {
    item: [
    {
        id:1,
        title:'시어서커 싱글 브레스티드 자켓 (블랙)',
        price: 15000,
        discountPrice: 8000,
        Image: [{
            src: "https://lh3.googleusercontent.com/d9-boEjTiNLUJNhQMlu823BquqDggfQlbQfcsczALamx1P0as5N6cYgN255V68m0Zcg3jNeRLjIMpkqU3xMIYQA8IfrFHrOt8at2Rods9650gW892PdvorDtYALmYaMXRnvUV-DK9fd6HW7hVaSxaHySdzYB_7_S3mO_CPpEPqWmkRRSRMe9WixEY3-A7rajnWYx0qBOcTeCmw7laeU-oAtzkACrKw9FLdW2PxsTcyt1omJCK9YXXZpSk6eUAXAMm-8udn_bD2wbcGJdjat1HEO49F3m-PN-IT7UcNho4BbfHqvkOwYEdGm5MzDfjRHecNOpCuk1dupwQ0e7EQRrNjWNSZrEyljeZKV9j7lSkoSk-hCFJeHQM_2uaa_WfirqAJ12woP9Lf6o1oueWqkJaiaZytaiDzme1Zha_rdNKFwKnlkBO6jB_jY24OkdBgouRKij1p324vupnOo6ot3OWk2XBKf60jJXuyPYyUvu3RfY0T8ig9WCil2EsP6LEml0SIVyGpa6q_WDXaNcRnoZobffKVS6iCfcw3a6diNtS11rsUL2ogCPgxsCVLqMkTU5RHWLi35R4aBCTjyCrlZQO8KG-dk1RTkHBb2iqhLQa2D8okcTu9h0yfctDNjlgpmHuvVppycdX3ppBhaPmKknr4BTTKwceMsjAgDoCX1fLxyiGgDsLymtT9y35rFX04DLpb2rFxPwxH7s6hZku_hzs19VQl57BmScuDhq-5rBWtXyghW1gUHY5_woTcw=w555-h832-no?authuser=0"
        }, {
            src: "https://lh3.googleusercontent.com/DpoKLsbt9PIqBT32sCAH0xLUmFTEvpkyBJQM0Rtj5EN7OoW9pBVgoR6cS0KAy7GA3PUebUHD5z1saaERZEk7n1cLf7eW-U144Z93Sl-kWEEmjUoThKzfw8JrJ3EViJ2SvH-aZ5wjdk8EDAEu7Lw0u6vfPOEosJZUIobjwbGtsdv9ryV5QfEdplsVU4xSbd_A7vV2G7pOkJdwfzCdUEDzc5d4_XxGTIVip1iz89_obDOlCgKUJbJHbEiw65jSRQwIH0HBZ3ra8eNqRq0C3hLKndX26sxadPsNPB5cl0ELgyS_kA7LRCsn_vWcGThg35NsXhMcT8izuCM0wLzF4U-y_9NdGTbVJBwavjnAyJk8eUPUJBigIUakBJpORZNRtBbk3hOorJfVCVCzhE3cutU162JtpRPZVcVB86ElHIgwTVRGrssei6zIFP9Lto9XejzQQnBj-Dt6q2aSHv5DKzdG63O3sfhpLK8oLW5ZDGD4RCJf89-0I3PNl0vdrCgjtJNT6TlTMZVVv1U_9J2uRipgBIGEpvrpChnYCVhjYCeMXyrzBzPi0S1uDbug4kZM_539lzVXs-SHacCL2aG_MwUCFcc3nHaa-ZAeNxTgjd29GvsX-0uqiM_gDMOGSXyUzPkEtkVG1cU4H00YSFw0FBw38hTzvw40dha3rfYl_8LelaiInU_AUa622JpvsTVJp_XNcceoyKnPA9WsvN2eB6JwW394ylqmd4ly91obReFGmrCoXB-oVv4SJCn27Qw=w556-h693-no?authuser=0"
        }]
    },
    {
        id:2,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/s0cB-GwL_TLOpBJokU3QxiwIP5LBs26Qwxqud6qN7KF9LNm78HCfOUDpUTfj1Uyb1ci8MQeVPoofBcz5JZrMqH5L8bBHxBwpt4uHTJohpgTlsoIZTBXyKknpqiKqZgE--cInoZRm1un7a7pUHbiu12PrmLQh1hhfq8ur15ohf8T33swhpqmHzxoQpn7TolwIZJQ6xLpszWKycwp7_8-m8qf-vKrT4VqiZMBPtYscrj5w_ZvkBvSrqsC696CQbeuzqwQv4v6hKU9Ymz6zyRSfzJseefbG4jsx9sMNgMujesiTUUpsaoRFIBgyL2bkS4p-4CeQSquX5xx6UReDdcQf40D59WHmm_L-GDn95PvSsqpfvfvoIHZgjh_pOJlIa2zR9ybDNU70tRbaHEc5GLEGDO8bvuyAopKQWa7N9qOxKNYRFsVFCKb-KqkH-jaJ8SxuHVNPUSThPs_95MnJlLBGk34Z7oyaowUV-ledjKtlk7iB2hbNQcQOSDasne0PL4WuYDZt1-zwGzKYYqf_McWYfhhDqtQ2NYWJx1CzL1azqZM1lDxPqXgnTtqNXvyoFlHyoGDtg8xQOCGs5couxzy3Um4uiGoRUzFtqK1ogoUN2KfeY7nzkWUBsU74zzh0zqgaaD74DBFpUSVvxWZtBw2jIx28iYxIVALk9i2oQousiCA336Af8aolaT4cf28_sBFCM00T-a1jwdi3HmszYzdI6lqo341agns3itAz0bzK-2NQjRjgOLvsWldDE28=w547-h830-no?authuser=0"
        }, {
            src: "https://lh3.googleusercontent.com/k_3wvId1EXf2AOPtsJIb0yNutCzgyaJO0xKxGAD_ckiXv99wJHHKxug6GqpUEZsxIbfF5q3ly_XfoLs9Zjh_LmMNSZEpgwu13G8W6gzZ-qD5H4tcRCjV3tXO5xN1QYF156C1I_Kc0oBlnrvaNJlFD50eI70GJp0uSzxTZI0VPndRC0ke-KQ-1DNWO_ImkBh9Bu066d2Z44cO07eWPTWo9Zwx2jNgvPEXJde6g-74PJT2vqj6_CympVUDwFHOOMSpiDgDDd4h8aJxsuYI9mUALiAPrqBlLXpDhlzsBVTrn0jJyeG8-DCXT_V8j6O6ihHn3NoTWQ0ULPwQi_OFt6yXqAGfKmP8mf_1xgOqPb5WstTGihZWFxrBNBK9edj7ADdgbfkmu0z871s0SiP9Zge-iIRzD0L2DzyStIv7INs9y02hbA-YhlLHBgF-w71aMev-r3Yh7bwJGk0yIU0DMqlsF1T5YgLHFTAVQ06fWuCaqGHkQ8heZ9st_FkUk9pgKJppocYymXfFOlBORLZ5wHLrngZVkwfuYYfvbnnVFHbnmPxx3twrmacH4xHMHXVL-oXA43s1cDgdlHTkW3WC4zXk8KtlG2w9Vo1OaOLBPNg5pWQ0bPerRNIs6a2ipBii63wavGxeu0pgXOA-JB2ALVvCm_7O20ON4PCKRWzYd1xmL6bIPfUGZhOtt9OfsIhS27KPs98obz9hziYjNA_xbcdueuMhBwerH9vXmX79jdM94kCgIqx2l32Kd0EaqV8=w554-h833-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    {
        id:3,
        title:'시어서커 쇼츠 (다크네이비)',
        price: 2000,
        discountPrice: 3000,
        Image: [{
            src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
        }]
    },
    
    
],
    imagePath: [],
    itemAdded: false,

    getMoreItem: true,
    
    getItemLoading:false,
    getItemDone:false,
    getItemError:null,

    addItemLoading:false,
    addItemDone:false,
    addItemError:null,
    
}

export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id:3,
    title:'시어서커 쇼츠 (다크네이비)',
    price: 2000,
    discountPrice: 3000,
    Image: [{
        src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
    }]
}));


// export const generateDummyPost = 

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        console.log(action.data);
        switch (action.type) {
            case ADD_ITEM_REQUEST:
                draft.addItemLoading = true;
                draft.addItemDone = false;
                draft.addItemError = null;
                break;
            case ADD_ITEM_SUCCESS:
                draft.item.unshift(action.data)
                draft.addItemLoading=false;
                draft.addItemDone=true;
                break;
            case ADD_ITEM_FAILURE:
                draft.addItemLoading=false;
                draft.addItemError=action.error;
                break;

            case GET_ITEM_REQUEST:
                draft.getItemLoading = true;
                draft.getItemDone = false;
                draft.getItemError = null;
                break;
            case GET_ITEM_SUCCESS:
                draft.getItemLoading=false;
                draft.getItemDone=true;
                draft.item = action.data.concat(draft.item);
                draft.getMoreItem = draft.item.length < 30;
                break;
            case GET_ITEM_FAILURE:
                draft.getItemLoading=false;
                draft.getItemError=action.error;
                break;
            default:
                return state;
        }
    })
};

export default reducer;