import {
  Document,
  Font,
  Page,
  Path,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "Lato",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHvxk6XweuBCY.ttf",
    },
    {
      src: "http://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVew-FGC_p9dw.ttf",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  header: {
    gap: 24,
    paddingBottom: 12,
    borderBottom: 1,
    borderColor: "#9EADB8",
    marginBottom: 16,
  },
  page: {
    backgroundColor: "#ffffff",
    padding: 32,
  },
  gap4: {
    marginBottom: 4,
  },
  gap8: {
    margin: 8,
  },
  text: {
    fontSize: 12,
    color: "#171D21",
    fontFamily: "Lato",
  },
  textSemibold: {
    fontWeight: 500,
  },
  textBold: {
    fontWeight: 700,
  },
  infoSection: {},
  infoList: {
    border: 1,
    borderColor: "#CCD4DA",
  },
  infoListItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#F6F8F9",
  },
  infoListItemLight: {
    backgroundColor: "#FFFFFF",
  },
  box: {
    backgroundColor: "#F6F8F9",
    border: 1,
    borderColor: "#778C9B",
    padding: 16,
    gap: 15,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  tableContainer: {
    gap: 10,
  },
  tableBody: {
    gap: 10,
  },
  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    paddingBottom: 8,
    borderBottom: 1,
    borderColor: "#9E9E9E",
  },
  tableItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
});

const EngieLogo = () => (
  <Svg width="79" height="27" viewBox="0 0 79 27">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M78.0535 10.8511C67.5951 4.08929 53.9524 -0.000976562 39.028 -0.000976562C24.1036 -0.000976562 10.4583 4.08929 0 10.8511C10.4021 7.50218 22.5627 5.42508 39.028 5.42508C55.4932 5.42508 67.6538 7.50218 78.0535 10.8511ZM33.0424 14.3633C32.2744 14.3633 31.8806 14.9648 31.7803 15.7014C31.7235 16.113 31.5823 17.0367 31.444 17.9422L31.4438 17.9432L31.4438 17.9438L31.4437 17.944L31.4437 17.9442C31.3083 18.8303 31.1756 19.6986 31.1273 20.0522L31.1164 20.1337C31.063 20.5385 31.0097 20.9425 30.6063 21.1156C30.1759 21.3004 29.6525 21.0162 29.2073 20.6419L22.1536 14.8346C21.7904 14.5281 21.3244 14.3597 20.8426 14.3609C19.8447 14.3609 18.886 14.9601 18.886 16.4262V25.5091C18.848 26.1123 19.3225 26.631 19.9452 26.6677C19.9697 26.6691 19.9939 26.6696 20.0184 26.6696C20.6584 26.6862 21.1982 26.2106 21.2413 25.5919C21.2413 25.5919 21.975 21.2648 22.0557 20.7817C22.1585 20.2204 22.249 19.7798 22.809 19.6117C23.3153 19.4601 23.7874 19.7443 24.5064 20.3483C25.2255 20.9522 31.1591 26.1462 31.1591 26.1462C31.5409 26.5062 32.0601 26.6959 32.5923 26.6696C33.1769 26.6696 34.2384 26.4327 34.2384 24.7085V15.6612C34.2408 14.8227 33.6954 14.3633 33.0424 14.3633ZM64.4875 20.421C64.4875 23.9736 70.421 25.127 75.6037 24.047C76.3399 23.8931 76.8315 24.1133 76.988 24.7031C77.1666 25.3591 76.6163 25.7831 76.0097 25.9844C69.6066 28.1207 60.8676 26.3657 60.8676 20.6152C60.8676 16.5604 64.5951 14.0783 69.7313 14.0783C75.408 14.0783 77.3476 17.2165 77.3476 19.2889C77.3476 20.5986 76.7704 21.2333 75.5939 21.2333C74.7847 21.2312 73.6015 21.2241 72.4194 21.2171C71.0042 21.2086 69.5904 21.2002 68.8214 21.2002C67.8358 21.1954 67.4689 20.6554 67.4689 20.1818C67.4689 19.5826 67.9263 19.1397 68.7823 19.1089C69.1575 19.0953 69.5517 19.0817 69.9469 19.0681L69.9471 19.0681L69.9472 19.0681L69.9488 19.0681L69.9513 19.068L69.9515 19.068C71.142 19.027 72.3422 18.9857 73.0649 18.9431C74.1142 18.8839 74.2634 18.152 73.7302 17.6144C72.8693 16.7547 71.2086 16.3236 69.0832 16.487C67.058 16.6457 64.4875 17.7376 64.4875 20.421ZM15.4585 24.047C10.2733 25.127 4.3422 23.9736 4.3422 20.4209C4.3422 17.7375 6.91031 16.6457 8.9379 16.487C11.0609 16.3236 12.7216 16.7546 13.585 17.6144C14.1181 18.152 13.969 18.8838 12.9221 18.9431C12.198 18.9857 10.9984 19.0269 9.80844 19.0679C9.41087 19.0816 9.01438 19.0952 8.63706 19.1088C7.78103 19.1396 7.32366 19.5825 7.32366 20.1817C7.32366 20.6554 7.69053 21.1954 8.6762 21.2002C9.44499 21.2002 10.8591 21.2086 12.2747 21.217L12.2755 21.217H12.2759L12.2785 21.2171C13.4602 21.2241 14.6425 21.2312 15.4511 21.2333C16.6251 21.2333 17.2048 20.5986 17.2048 19.2888C17.2048 17.2165 15.2628 14.0783 9.58604 14.0783C4.44982 14.0783 0.72239 16.5604 0.72239 20.6152C0.72239 26.3657 9.4613 28.1207 15.8669 25.9844C16.4735 25.7831 17.0238 25.3591 16.8452 24.7031C16.6863 24.1133 16.1946 23.8931 15.4585 24.047ZM56.0602 24.5906L56.0602 24.5905L56.0601 24.5901C55.9377 23.393 55.7073 21.1409 55.611 18.5128C55.61 18.419 55.6777 18.3377 55.7724 18.3185L59.1476 17.7904C59.1777 17.7807 59.2098 17.7785 59.2411 17.784C59.3433 17.8022 59.411 17.8974 59.3922 17.9964C59.243 21.0754 58.9446 24.1662 58.8419 25.1704C58.7318 26.3664 58.1179 26.672 57.4845 26.672C56.851 26.672 56.2273 26.3451 56.1173 25.1609C56.1035 25.0143 56.084 24.8239 56.0606 24.5947L56.0603 24.5914L56.0602 24.5906ZM57.4936 14.0707C56.4649 14.008 55.5785 14.7645 55.5137 15.7603C55.5093 15.8285 55.5088 15.8969 55.5125 15.9651C55.5125 16.1001 55.5296 16.4695 55.5516 16.9312C55.558 17.0423 55.6558 17.1273 55.7705 17.1211C55.7751 17.1209 55.7797 17.1205 55.7843 17.12C55.7883 17.1195 55.7923 17.119 55.7962 17.1183L59.3182 16.5642C59.4141 16.5495 59.486 16.4711 59.4894 16.3771C59.4894 16.2161 59.4894 16.0527 59.5041 15.9746C59.5466 14.9632 58.7344 14.1098 57.6898 14.0686C57.6245 14.066 57.5589 14.0667 57.4936 14.0707ZM49.4293 19.0818C50.6734 19.0747 51.7662 19.0684 52.3179 19.0684C53.5482 19.0684 54.2795 19.6013 54.2746 20.9915C54.2746 23.7247 51.3861 26.851 45.4549 26.851C40.1426 26.851 35.882 24.781 35.882 20.5179C35.882 16.5342 40.1573 14.0687 45.4916 14.0687C47.1771 14.0471 48.8581 14.2413 50.4909 14.6466C51.3909 14.8763 51.8385 15.3026 51.6551 15.9658C51.4839 16.591 50.7991 16.7118 50.102 16.6171C42.18 15.53 39.5116 18.0855 39.5116 20.4065C39.5116 22.8744 42.6276 24.4329 45.4598 24.4329C47.6244 24.4329 49.7131 23.7247 50.5716 22.6447C50.9996 22.1047 50.9825 21.4747 49.718 21.4131C49.3098 21.3925 48.6946 21.3634 47.9983 21.3305C47.0926 21.2877 46.0497 21.2384 45.1468 21.1929C44.0975 21.1408 43.7942 20.596 43.7942 20.1744C43.7942 19.6889 44.0755 19.1015 45.2006 19.1015C46.4297 19.099 48.0258 19.0899 49.4293 19.0818Z"
      fill="#00AAFF"
    />
  </Svg>
);

const DocumentHeader = () => (
  <View style={styles.header} fixed>
    <View style={{ flexDirection: "row", gap: 16 }}>
      <EngieLogo />
      <View style={{ flexGrow: 1 }}>
        <Text style={[styles.text, styles.textBold, { color: "#60798B" }]}>
          ENGIE BRASIL ENERGIA S.A.
        </Text>
        <Text style={[styles.text, styles.textBold, { color: "#60798B" }]}>
          Diretoria de Operação - DO
        </Text>
      </View>
      <View style={{ gap: 4, alignItems: "flex-end" }}>
        <Text style={[styles.text, { color: "#60798B" }]}>FOLHA</Text>
        <Text
          style={[styles.text, styles.textBold, { textAlign: "left" }]}
          render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
        />
      </View>
    </View>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={[styles.text, styles.textBold]}>
        MENSAGEM OPERACIONAL - MO
      </Text>
      <Text style={[styles.text]}>FLORIANÓPOLIS, 13/12/2022</Text>
    </View>
  </View>
);

const DocumentFooter = () => (
  <View style={[styles.box, { gap: 11, border: 0 }]} wrap={false}>
    <Text style={styles.text}>ENGIE BRASIL ENERGIA S.A.</Text>
    <Text style={styles.text}>U.O Operação da Produção - OPE</Text>
    <Text style={styles.text}>Programação</Text>
    <Text style={styles.text}>Fone: (48) 3221-7071 / (48) 3221-7171</Text>
    <Text style={styles.text}>e-mail: dop.programacao.brenergia@engie.com</Text>
  </View>
);

const Gap = ({ size }: { size: number }) => (
  <View style={{ paddingTop: size }} />
);

const Divider = () => <View style={{ borderTop: 1, borderColor: "#CCD4DA" }} />;

const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <DocumentHeader />

        <View style={styles.infoSection}>
          <Text style={[styles.text, styles.textSemibold]}>
            MENSAGEM OPERACIONAL N° 1/2022
          </Text>
          <Gap size={8} />
          <Text style={[styles.text]}>Para: CELESC</Text>
          <Gap size={4} />
          <Text style={[styles.text]}>De: U.O. Operação da Produção - OPE</Text>
          <Gap size={8} />
          <Text style={styles.text}>TESTE</Text>
        </View>

        <Gap size={13} />

        <View style={styles.infoList}>
          <View style={styles.infoListItem} wrap={false}>
            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>LOCAL: </Text>
              BACLA_230_BAB1 - SB 230 KV Campo Largo B1 BA
            </Text>
          </View>
          <Divider />
          <View
            style={[styles.infoListItem, styles.infoListItemLight]}
            wrap={false}
          >
            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>EQUIPAMENTOS: </Text>
              BACLA_230_BAB1 - SB 230 KV Campo Largo B1 BA
            </Text>
          </View>
          <Divider />

          <View style={styles.infoListItem} wrap={false}>
            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>
                DATA E HORÁRIO INÍCIO:{" "}
              </Text>
              15/01/2022 - 16:17
            </Text>
          </View>
          <Divider />
          <View
            style={[styles.infoListItem, styles.infoListItemLight]}
            wrap={false}
          >
            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>
                DATA E HORÁRIO TÉRMINO:{" "}
              </Text>
              18/01/2022 - 16:17
            </Text>
          </View>
          <Divider />
          <View style={styles.infoListItem} wrap={false}>
            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>PERÍODO: </Text>
              CONTINUO
            </Text>
          </View>
          <Divider />
          <View
            style={[styles.infoListItem, styles.infoListItemLight]}
            wrap={false}
          >
            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>
                DESCRIÇÃO DO SERVIÇO:{" "}
              </Text>
              Teste
            </Text>
          </View>
          <Divider />
          <View style={styles.infoListItem} wrap={false}>
            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>
                LIMITAÇÕES OPERACIONAIS:{" "}
              </Text>
              Teste
            </Text>
          </View>
          <Divider />
          <View
            style={[styles.infoListItem, styles.infoListItemLight]}
            wrap={false}
          >
            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>
                RESPONSÁVEL PELO SERVIÇO:{" "}
              </Text>
              Teste
            </Text>
          </View>
          <Divider />
          <View style={styles.infoListItem} wrap={false}>
            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>
                TEMPO DE DEVOLUÇÃO:{" "}
              </Text>
              Imediato
            </Text>
          </View>
          <Divider />
          <View
            style={[styles.infoListItem, styles.infoListItemLight]}
            wrap={false}
          >
            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>
                DOCUMENTOS VINCULADOS:{" "}
              </Text>
              Imediato
            </Text>
          </View>
          <Divider />
          <View style={styles.infoListItem} wrap={false}>
            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>OBSERVAÇÃO: </Text>
              Teste
            </Text>
          </View>
        </View>

        <Gap size={8} />

        <View style={styles.box} wrap={false}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.text, { flexGrow: 1 }]}>
              <Text style={[styles.text, styles.textBold]}>
                SOLICITADO POR:{" "}
              </Text>
              Tonia Dias de Souza
            </Text>

            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>DATA: </Text>
              26/01/2022 - 12:19
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.text, { flexGrow: 1 }]}>
              <Text style={[styles.text, styles.textBold]}>DE ACORDO: </Text>
              PauloSupero
            </Text>

            <Text style={styles.text}>
              <Text style={[styles.text, styles.textBold]}>DATA: </Text>
              18/05/2022 - 14:33
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.text, { flexGrow: 1 }]}>
              <Text style={[styles.text, styles.textBold]}>
                JUSTIFICATIVA:{" "}
              </Text>
              Teste OCP4 Teste OCP4 Teste OCP4
            </Text>
          </View>
        </View>

        <Gap size={24} />

        <View wrap={false}>
          <Text style={[styles.text, styles.textBold, { textAlign: "center" }]}>
            PESSOAL NOTIFICADO (via email)
          </Text>
          <Gap size={16} />
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={[styles.text, styles.textBold, { flexGrow: 1 }]}>
                NOME
              </Text>
              <Text style={[styles.text, styles.textBold, { width: "11.5%" }]}>
                DATA
              </Text>
              <Text style={[styles.text, styles.textBold]}>HORA</Text>
            </View>
            <View style={styles.tableBody}>
              <View style={styles.tableItem}>
                <Text style={[styles.text, styles.textBold, { width: "70%" }]}>
                  cos@celesc.com.br
                </Text>
                <Text style={styles.text}>26/01/2022</Text>
                <Text style={styles.text}>12:19</Text>
              </View>
              <View style={styles.tableItem}>
                <Text style={[styles.text, styles.textBold, { width: "70%" }]}>
                  marcos.thibes@engie.com
                </Text>
                <Text style={styles.text}>26/01/2022</Text>
                <Text style={styles.text}>12:19</Text>
              </View>
              <View style={styles.tableItem}>
                <Text style={[styles.text, styles.textBold, { width: "70%" }]}>
                  otaviow@celesc.com.br
                </Text>
                <Text style={styles.text}>26/01/2022</Text>
                <Text style={styles.text}>12:19</Text>
              </View>
              <View style={styles.tableItem}>
                <Text style={[styles.text, styles.textBold, { width: "70%" }]}>
                  programacaocos@celesc.com.br
                </Text>
                <Text style={styles.text}>26/01/2022</Text>
                <Text style={styles.text}>12:19</Text>
              </View>
            </View>
          </View>
        </View>

        <Gap size={24} />

        <DocumentFooter />
      </Page>
    </Document>
  );
};

export default MyDocument;
